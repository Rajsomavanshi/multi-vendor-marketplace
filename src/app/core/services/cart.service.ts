import { Injectable, computed, signal } from '@angular/core';
import {
  CartItem,
  Order,
  OrderItem,
  Product,
  PromoCode,
  ShippingAddress,
  ShippingOption,
  WishlistItem,
} from '../models/marketplace.models';

const CART_STORAGE_KEY = 'mvm_cart_items_v1';
const WISHLIST_STORAGE_KEY = 'mvm_wishlist_items_v1';
const ORDERS_STORAGE_KEY = 'mvm_orders_v1';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // Free delivery threshold in currency units (INR ₹)
  readonly FREE_DELIVERY_THRESHOLD = 999;
  readonly TAX_RATE = 0.05; // 5% GST

  // Available Shipping Options
  readonly shippingOptions: ShippingOption[] = [
    {
      id: 'ship-std',
      name: 'Standard Delivery',
      description: 'Delivered in 4-6 business days via surface logistics',
      cost: 99,
      estimatedDays: '4-6 business days',
    },
    {
      id: 'ship-exp',
      name: 'Express Delivery',
      description: 'Priority courier with tracking, delivered in 2-3 business days',
      cost: 199,
      estimatedDays: '2-3 business days',
    },
    {
      id: 'ship-overnight',
      name: 'Same Day / Next Day Priority',
      description: 'Guaranteed 24-hour delivery for metro locations',
      cost: 299,
      estimatedDays: 'Next business day',
    },
  ];

  // Available Promotional Codes
  readonly promoCodes: PromoCode[] = [
    {
      code: 'WELCOME10',
      discountType: 'percentage',
      discountValue: 10,
      minOrderValue: 500,
      description: '10% discount on orders above ₹500',
    },
    {
      code: 'FLAT200',
      discountType: 'fixed',
      discountValue: 200,
      minOrderValue: 1500,
      description: 'Flat ₹200 off on orders above ₹1,500',
    },
    {
      code: 'FREESHIP',
      discountType: 'percentage', // Handled specially for zero shipping
      discountValue: 0,
      minOrderValue: 300,
      description: 'Free standard delivery on orders above ₹300',
    },
  ];

  // State Signals
  readonly cartItems = signal<CartItem[]>(this.loadCartFromStorage());
  readonly wishlistItems = signal<WishlistItem[]>(this.loadWishlistFromStorage());
  readonly selectedShippingOption = signal<ShippingOption>(this.shippingOptions[0]);
  readonly appliedPromoCode = signal<PromoCode | null>(null);
  readonly orders = signal<Order[]>(this.loadOrdersFromStorage());
  readonly lastCompletedOrder = signal<Order | null>(null);

  // Computations
  readonly itemCount = computed(() =>
    this.cartItems().reduce((total, item) => total + item.quantity, 0)
  );

  readonly wishlistCount = computed(() => this.wishlistItems().length);

  readonly subtotal = computed(() =>
    this.cartItems().reduce((total, item) => total + item.product.price * item.quantity, 0)
  );

  readonly isFreeDeliveryEligible = computed(() => {
    const promo = this.appliedPromoCode();
    if (promo?.code === 'FREESHIP' && this.subtotal() >= promo.minOrderValue) {
      return true;
    }
    return this.subtotal() >= this.FREE_DELIVERY_THRESHOLD;
  });

  readonly deliveryCharge = computed(() => {
    if (this.cartItems().length === 0) return 0;
    const selected = this.selectedShippingOption();
    if (selected.id === 'ship-std' && this.isFreeDeliveryEligible()) {
      return 0;
    }
    if (this.appliedPromoCode()?.code === 'FREESHIP' && selected.id === 'ship-std') {
      return 0;
    }
    return selected.cost;
  });

  readonly amountNeededForFreeDelivery = computed(() => {
    const currentSubtotal = this.subtotal();
    if (currentSubtotal >= this.FREE_DELIVERY_THRESHOLD) return 0;
    return this.FREE_DELIVERY_THRESHOLD - currentSubtotal;
  });

  readonly freeDeliveryProgress = computed(() => {
    const currentSubtotal = this.subtotal();
    if (currentSubtotal <= 0) return 0;
    if (currentSubtotal >= this.FREE_DELIVERY_THRESHOLD) return 100;
    return Math.round((currentSubtotal / this.FREE_DELIVERY_THRESHOLD) * 100);
  });

  readonly discountAmount = computed(() => {
    const promo = this.appliedPromoCode();
    const currentSubtotal = this.subtotal();
    if (!promo || currentSubtotal < promo.minOrderValue) return 0;

    if (promo.code === 'FREESHIP') {
      return 0; // Discount represented by 0 delivery charge
    }

    if (promo.discountType === 'percentage') {
      return Math.round((currentSubtotal * promo.discountValue) / 100);
    }
    return Math.min(promo.discountValue, currentSubtotal);
  });

  readonly estimatedTax = computed(() => {
    const taxableAmount = Math.max(0, this.subtotal() - this.discountAmount());
    return Math.round(taxableAmount * this.TAX_RATE);
  });

  readonly grandTotal = computed(() => {
    if (this.cartItems().length === 0) return 0;
    const total = this.subtotal() - this.discountAmount() + this.deliveryCharge() + this.estimatedTax();
    return Math.max(0, total);
  });

  constructor() {
    // If cart is empty on first boot, initialize with seed items for pleasant first impression
    if (this.cartItems().length === 0 && this.wishlistItems().length === 0) {
      this.seedDefaultItems();
    }
  }

  // ================= Cart Operations =================
  addToCart(product: Product, quantity = 1): void {
    if (quantity <= 0) return;

    this.cartItems.update((current) => {
      const existingIndex = current.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...current];
        const newQty = Math.min(updated[existingIndex].quantity + quantity, product.stockCount);
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: newQty,
        };
        return updated;
      } else {
        const initialQty = Math.min(quantity, product.stockCount);
        return [
          ...current,
          {
            product,
            quantity: initialQty,
            addedAt: new Date().toISOString(),
          },
        ];
      }
    });
    this.saveCartToStorage();
  }

  updateQuantity(productId: string, quantity: number): void {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }

    this.cartItems.update((current) =>
      current.map((item) => {
        if (item.product.id === productId) {
          const clampedQty = Math.min(quantity, item.product.stockCount);
          return { ...item, quantity: clampedQty };
        }
        return item;
      })
    );
    this.saveCartToStorage();
  }

  incrementQuantity(productId: string): void {
    const item = this.cartItems().find((i) => i.product.id === productId);
    if (item && item.quantity < item.product.stockCount) {
      this.updateQuantity(productId, item.quantity + 1);
    }
  }

  decrementQuantity(productId: string): void {
    const item = this.cartItems().find((i) => i.product.id === productId);
    if (item) {
      if (item.quantity > 1) {
        this.updateQuantity(productId, item.quantity - 1);
      } else {
        this.removeFromCart(productId);
      }
    }
  }

  removeFromCart(productId: string): void {
    this.cartItems.update((current) => current.filter((item) => item.product.id !== productId));
    this.saveCartToStorage();
  }

  clearCart(): void {
    this.cartItems.set([]);
    this.appliedPromoCode.set(null);
    this.saveCartToStorage();
  }

  // ================= Wishlist Operations =================
  addToWishlist(product: Product): void {
    this.wishlistItems.update((current) => {
      if (current.some((item) => item.product.id === product.id)) {
        return current;
      }
      return [
        ...current,
        {
          product,
          addedAt: new Date().toISOString(),
        },
      ];
    });
    this.saveWishlistToStorage();
  }

  removeFromWishlist(productId: string): void {
    this.wishlistItems.update((current) => current.filter((item) => item.product.id !== productId));
    this.saveWishlistToStorage();
  }

  isInWishlist(productId: string): boolean {
    return this.wishlistItems().some((item) => item.product.id === productId);
  }

  toggleWishlist(product: Product): boolean {
    if (this.isInWishlist(product.id)) {
      this.removeFromWishlist(product.id);
      return false;
    } else {
      this.addToWishlist(product);
      return true;
    }
  }

  moveToCart(productId: string): void {
    const wishItem = this.wishlistItems().find((item) => item.product.id === productId);
    if (wishItem) {
      this.addToCart(wishItem.product, 1);
      this.removeFromWishlist(productId);
    }
  }

  moveToWishlist(productId: string): void {
    const cartItem = this.cartItems().find((item) => item.product.id === productId);
    if (cartItem) {
      this.addToWishlist(cartItem.product);
      this.removeFromCart(productId);
    }
  }

  moveAllWishlistToCart(): void {
    const items = this.wishlistItems();
    for (const item of items) {
      this.addToCart(item.product, 1);
    }
    this.wishlistItems.set([]);
    this.saveWishlistToStorage();
  }

  clearWishlist(): void {
    this.wishlistItems.set([]);
    this.saveWishlistToStorage();
  }

  // ================= Promo Code Operations =================
  applyPromoCode(code: string): { success: boolean; message: string } {
    const trimmed = code.trim().toUpperCase();
    const promo = this.promoCodes.find((p) => p.code === trimmed);

    if (!promo) {
      return { success: false, message: 'Invalid promo code. Try WELCOME10, FLAT200, or FREESHIP.' };
    }

    if (this.subtotal() < promo.minOrderValue) {
      return {
        success: false,
        message: `Code "${promo.code}" requires a minimum order value of ₹${promo.minOrderValue}.`,
      };
    }

    this.appliedPromoCode.set(promo);
    return { success: true, message: `Promo code "${promo.code}" applied successfully!` };
  }

  removePromoCode(): void {
    this.appliedPromoCode.set(null);
  }

  // ================= Shipping & Checkout =================
  setShippingOption(option: ShippingOption): void {
    this.selectedShippingOption.set(option);
  }

  createOrder(
    shippingAddress: ShippingAddress,
    paymentMethod: 'Credit / Debit Card' | 'UPI / NetBanking' | 'Cash on Delivery'
  ): Order {
    const items: OrderItem[] = this.cartItems().map((item) => ({
      productId: item.product.id,
      productName: item.product.name,
      sellerName: item.product.sellerName,
      price: item.product.price,
      quantity: item.quantity,
      totalPrice: item.product.price * item.quantity,
      imageUrl: item.product.imageUrl,
    }));

    const now = new Date();
    const deliveryDays =
      this.selectedShippingOption().id === 'ship-overnight'
        ? 1
        : this.selectedShippingOption().id === 'ship-exp'
        ? 3
        : 5;
    const estDelivery = new Date(now.getTime() + deliveryDays * 24 * 60 * 60 * 1000);

    const randomSuffix = Math.floor(100000 + Math.random() * 900000);
    const orderId = `ORD-${now.getFullYear()}-${randomSuffix}`;

    const newOrder: Order = {
      id: orderId,
      orderNumber: orderId,
      createdAt: now.toISOString(),
      estimatedDeliveryDate: estDelivery.toISOString(),
      items,
      itemCount: this.itemCount(),
      subtotal: this.subtotal(),
      deliveryCharge: this.deliveryCharge(),
      discount: this.discountAmount(),
      appliedPromoCode: this.appliedPromoCode()?.code,
      tax: this.estimatedTax(),
      total: this.grandTotal(),
      shippingAddress,
      shippingOption: this.selectedShippingOption(),
      paymentMethod,
      paymentStatus: paymentMethod === 'Cash on Delivery' ? 'Pending COD' : 'Paid',
      orderStatus: 'Confirmed',
    };

    // Save order
    this.orders.update((list) => [newOrder, ...list]);
    this.lastCompletedOrder.set(newOrder);
    this.saveOrdersToStorage();

    // Clear cart after successful checkout
    this.clearCart();

    return newOrder;
  }

  getOrderById(id: string): Order | undefined {
    return this.orders().find((o) => o.id === id || o.orderNumber === id);
  }

  // ================= Demo Seeds =================
  seedDefaultItems(): void {
    const demoCart: CartItem[] = [
      {
        product: {
          id: 'prod-101',
          name: 'Sony WH-1000XM5 Noise Canceling Headphones',
          description: 'Industry-leading noise canceling headphones with dual processors.',
          price: 24990,
          originalPrice: 29990,
          category: 'Electronics',
          sellerId: 'seller-1',
          sellerName: 'Apex Electronics',
          sellerRating: 4.8,
          imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80',
          rating: 4.8,
          reviewCount: 1420,
          inStock: true,
          stockCount: 15,
        },
        quantity: 1,
        addedAt: new Date().toISOString(),
      },
      {
        product: {
          id: 'prod-102',
          name: 'Ultra Slim Minimalist Leather Wallet',
          description: 'Handcrafted full-grain leather bifold with RFID blocking protection.',
          price: 1299,
          originalPrice: 1999,
          category: 'Fashion',
          sellerId: 'seller-2',
          sellerName: 'Urban Craft Leather',
          sellerRating: 4.6,
          imageUrl: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&auto=format&fit=crop&q=80',
          rating: 4.5,
          reviewCount: 380,
          inStock: true,
          stockCount: 32,
        },
        quantity: 2,
        addedAt: new Date().toISOString(),
      },
    ];

    const demoWishlist: WishlistItem[] = [
      {
        product: {
          id: 'prod-104',
          name: 'Ceramic Pour-Over Coffee Maker Set',
          description: 'Artisan ceramic dripper with wooden collar and glass carafe.',
          price: 1850,
          originalPrice: 2299,
          category: 'Home & Kitchen',
          sellerId: 'seller-3',
          sellerName: 'Nordic Living Co.',
          sellerRating: 4.9,
          imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80',
          rating: 4.9,
          reviewCount: 245,
          inStock: true,
          stockCount: 20,
        },
        addedAt: new Date().toISOString(),
      },
    ];

    this.cartItems.set(demoCart);
    this.wishlistItems.set(demoWishlist);
    this.saveCartToStorage();
    this.saveWishlistToStorage();
  }

  // ================= Storage Helpers =================
  private loadCartFromStorage(): CartItem[] {
    try {
      const data = localStorage.getItem(CART_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  private saveCartToStorage(): void {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.cartItems()));
    } catch (e) {
      console.warn('LocalStorage save failed', e);
    }
  }

  private loadWishlistFromStorage(): WishlistItem[] {
    try {
      const data = localStorage.getItem(WISHLIST_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  private saveWishlistToStorage(): void {
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(this.wishlistItems()));
    } catch (e) {
      console.warn('LocalStorage save failed', e);
    }
  }

  private loadOrdersFromStorage(): Order[] {
    try {
      const data = localStorage.getItem(ORDERS_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  private saveOrdersToStorage(): void {
    try {
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(this.orders()));
    } catch (e) {
      console.warn('LocalStorage save failed', e);
    }
  }
}
