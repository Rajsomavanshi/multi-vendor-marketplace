import { Injectable, computed, signal, inject } from '@angular/core';
import {
  OrderStatus,
  ProductFormData,
  SellerDashboardStats,
  SellerInfoItem,
  SellerOrder,
  SellerProduct,
  StockStatus,
} from '../models/seller.model';
import { CartService } from '../../../core/services/cart.service';

const SELLER_PRODUCTS_STORAGE_KEY = 'mvm_seller_products_v1';
const SELLER_ORDERS_STORAGE_KEY = 'mvm_seller_orders_v1';
const SELLER_ACTIVE_ID_KEY = 'mvm_seller_active_id_v1';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  private readonly cartService = inject(CartService);

  readonly availableSellers: SellerInfoItem[] = [
    {
      id: 'seller-1',
      name: 'ElectroVibe Stores',
      rating: 4.9,
      salesCount: 3840,
      isVerified: true,
      location: 'San Jose, CA',
      badge: 'Top Tech Seller',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    },
    {
      id: 'seller-2',
      name: 'SonicWave Audio',
      rating: 4.8,
      salesCount: 2190,
      isVerified: true,
      location: 'Austin, TX',
      badge: 'Audio Specialist',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    },
    {
      id: 'seller-3',
      name: 'Urban Threads Co.',
      rating: 4.7,
      salesCount: 4520,
      isVerified: true,
      location: 'Brooklyn, NY',
      badge: 'Trending Fashion',
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    },
    {
      id: 'seller-4',
      name: 'Nordic Living Goods',
      rating: 4.9,
      salesCount: 1640,
      isVerified: true,
      location: 'Seattle, WA',
      badge: 'Eco & Home Choice',
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    },
  ];

  // State Signals
  readonly activeSellerId = signal<string>(this.loadActiveSellerId());
  readonly allProducts = signal<SellerProduct[]>(this.loadProductsFromStorage());
  readonly allOrders = signal<SellerOrder[]>(this.loadOrdersFromStorage());

  // Active Seller Profile
  readonly currentSeller = computed<SellerInfoItem | null>(() => {
    const id = this.activeSellerId();
    if (id === 'all') return null;
    return this.availableSellers.find((s) => s.id === id) || this.availableSellers[0];
  });

  // Filtered Products for Active Seller (or All if activeSellerId === 'all')
  readonly sellerProducts = computed<SellerProduct[]>(() => {
    const id = this.activeSellerId();
    const products = this.allProducts();
    if (id === 'all') {
      return products;
    }
    return products.filter((p) => p.sellerId === id);
  });

  // Filtered Orders for Active Seller
  readonly sellerOrders = computed<SellerOrder[]>(() => {
    const id = this.activeSellerId();
    const orders = this.allOrders();
    if (id === 'all') {
      return orders;
    }
    return orders.filter((o) =>
      o.items.some((item) => {
        const prod = this.allProducts().find((p) => p.id === item.productId);
        return prod?.sellerId === id;
      })
    );
  });

  // Dashboard Summary Cards Calculations
  readonly dashboardStats = computed<SellerDashboardStats>(() => {
    const products = this.sellerProducts();
    const orders = this.sellerOrders();

    let totalRevenue = 0;
    let pendingOrders = 0;
    let shippedOrders = 0;
    let deliveredOrders = 0;

    for (const order of orders) {
      if (order.status !== 'Cancelled') {
        totalRevenue += order.totalAmount;
      }
      if (order.status === 'Confirmed' || order.status === 'Processing') {
        pendingOrders++;
      } else if (order.status === 'Shipped') {
        shippedOrders++;
      } else if (order.status === 'Delivered') {
        deliveredOrders++;
      }
    }

    const inStockCount = products.filter((p) => p.status === 'In Stock').length;
    const lowStockCount = products.filter((p) => p.status === 'Low Stock').length;
    const outOfStockCount = products.filter((p) => p.status === 'Out of Stock').length;

    const totalInventoryUnits = products.reduce((sum, p) => sum + p.stock, 0);
    const totalInventoryValue = products.reduce((sum, p) => sum + p.price * p.stock, 0);

    const nonCancelledOrders = orders.filter((o) => o.status !== 'Cancelled').length;
    const fulfillmentRate =
      orders.length > 0 ? Math.round((deliveredOrders / Math.max(1, nonCancelledOrders)) * 100) : 98;

    return {
      totalRevenue,
      revenueGrowth: '+18.4%',
      totalOrders: orders.length,
      orderGrowth: '+12.5%',
      pendingOrders,
      shippedOrders,
      deliveredOrders,
      totalProducts: products.length,
      inStockCount,
      lowStockCount,
      outOfStockCount,
      fulfillmentRate: Math.min(100, Math.max(85, fulfillmentRate)),
      totalInventoryUnits,
      totalInventoryValue,
    };
  });

  // Distinct Categories across current products
  readonly categories = computed<string[]>(() => {
    const cats = new Set(this.sellerProducts().map((p) => p.category));
    return ['All', ...Array.from(cats)];
  });

  constructor() {
    // If empty storage, seed initial data
    if (this.allProducts().length === 0) {
      this.resetToMockData();
    }
  }

  // ================= Seller Switching =================
  setActiveSeller(sellerId: string): void {
    this.activeSellerId.set(sellerId);
    try {
      localStorage.setItem(SELLER_ACTIVE_ID_KEY, sellerId);
    } catch {
      // storage unavailable
    }
  }

  // ================= Product Operations =================
  determineStockStatus(stock: number): StockStatus {
    if (stock <= 0) return 'Out of Stock';
    if (stock <= 5) return 'Low Stock';
    return 'In Stock';
  }

  addProduct(formData: ProductFormData, targetSellerId?: string): SellerProduct {
    const sellerId = targetSellerId || (this.activeSellerId() === 'all' ? 'seller-1' : this.activeSellerId());
    const seller = this.availableSellers.find((s) => s.id === sellerId) || this.availableSellers[0];

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const newId = `prod-custom-${Date.now().toString(36)}-${randomSuffix}`;
    const generatedSku =
      formData.sku && formData.sku.trim()
        ? formData.sku.trim().toUpperCase()
        : `${formData.category.substring(0, 3).toUpperCase()}-${randomSuffix}`;

    const newProduct: SellerProduct = {
      id: newId,
      name: formData.name.trim(),
      sku: generatedSku,
      category: formData.category,
      price: Number(formData.price),
      originalPrice: Number(formData.originalPrice) || Number(formData.price),
      stock: Math.max(0, Number(formData.stock)),
      sellerId: seller.id,
      sellerName: seller.name,
      imageUrl:
        formData.imageUrl && formData.imageUrl.trim()
          ? formData.imageUrl.trim()
          : 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&auto=format&fit=crop&q=80',
      description: formData.description.trim() || `${formData.name} - high quality marketplace item.`,
      tagline: formData.tagline?.trim(),
      brand: formData.brand?.trim() || seller.name,
      rating: 4.8,
      reviewsCount: 1,
      tags: formData.tags
        ? formData.tags.split(',').map((t) => t.trim()).filter(Boolean)
        : [formData.category],
      createdAt: new Date().toISOString(),
      status: this.determineStockStatus(Number(formData.stock)),
    };

    this.allProducts.update((list) => [newProduct, ...list]);
    this.saveProductsToStorage();
    return newProduct;
  }

  updateProduct(id: string, formData: ProductFormData): boolean {
    let updated = false;

    this.allProducts.update((list) =>
      list.map((item) => {
        if (item.id === id) {
          updated = true;
          const newStock = Math.max(0, Number(formData.stock));
          return {
            ...item,
            name: formData.name.trim(),
            sku: formData.sku?.trim().toUpperCase() || item.sku,
            category: formData.category,
            price: Number(formData.price),
            originalPrice: Number(formData.originalPrice) || Number(formData.price),
            stock: newStock,
            imageUrl: formData.imageUrl?.trim() || item.imageUrl,
            description: formData.description?.trim() || item.description,
            tagline: formData.tagline?.trim() || item.tagline,
            brand: formData.brand?.trim() || item.brand,
            tags: formData.tags
              ? formData.tags.split(',').map((t) => t.trim()).filter(Boolean)
              : item.tags,
            status: this.determineStockStatus(newStock),
          };
        }
        return item;
      })
    );

    if (updated) {
      this.saveProductsToStorage();
    }
    return updated;
  }

  deleteProduct(id: string): boolean {
    const initialLength = this.allProducts().length;
    this.allProducts.update((list) => list.filter((item) => item.id !== id));
    const wasDeleted = this.allProducts().length < initialLength;
    if (wasDeleted) {
      this.saveProductsToStorage();
    }
    return wasDeleted;
  }

  updateStock(id: string, newStock: number): void {
    const clampedStock = Math.max(0, Math.floor(newStock));
    this.allProducts.update((list) =>
      list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            stock: clampedStock,
            status: this.determineStockStatus(clampedStock),
          };
        }
        return item;
      })
    );
    this.saveProductsToStorage();
  }

  adjustStock(id: string, delta: number): void {
    const item = this.allProducts().find((p) => p.id === id);
    if (item) {
      this.updateStock(id, item.stock + delta);
    }
  }

  // ================= Order Operations =================
  updateOrderStatus(orderId: string, newStatus: OrderStatus): void {
    this.allOrders.update((list) =>
      list.map((order) => {
        if (order.id === orderId || order.orderNumber === orderId) {
          return {
            ...order,
            status: newStatus,
          };
        }
        return order;
      })
    );
    this.saveOrdersToStorage();
  }

  // ================= Storage & Initial Seeding =================
  private loadActiveSellerId(): string {
    try {
      const stored = localStorage.getItem(SELLER_ACTIVE_ID_KEY);
      return stored || 'seller-1';
    } catch {
      return 'seller-1';
    }
  }

  private loadProductsFromStorage(): SellerProduct[] {
    try {
      const raw = localStorage.getItem(SELLER_PRODUCTS_STORAGE_KEY);
      if (raw) {
        const parsed: SellerProduct[] = JSON.parse(raw);
        // Ensure stock status is fresh
        return parsed.map((p) => ({
          ...p,
          status: this.determineStockStatus(p.stock),
        }));
      }
    } catch {
      // ignore
    }
    return [];
  }

  private saveProductsToStorage(): void {
    try {
      localStorage.setItem(SELLER_PRODUCTS_STORAGE_KEY, JSON.stringify(this.allProducts()));
    } catch {
      // storage unavailable
    }
  }

  private loadOrdersFromStorage(): SellerOrder[] {
    try {
      const raw = localStorage.getItem(SELLER_ORDERS_STORAGE_KEY);
      if (raw) {
        return JSON.parse(raw);
      }
    } catch {
      // ignore
    }
    return [];
  }

  private saveOrdersToStorage(): void {
    try {
      localStorage.setItem(SELLER_ORDERS_STORAGE_KEY, JSON.stringify(this.allOrders()));
    } catch {
      // storage unavailable
    }
  }

  resetToMockData(): void {
    const seedProducts: SellerProduct[] = [
      {
        id: 'prod-s1-1',
        name: 'Sony WH-1000XM5 Noise Canceling Headphones',
        sku: 'ELE-XM5-01',
        category: 'Electronics',
        price: 24990,
        originalPrice: 29990,
        stock: 14,
        sellerId: 'seller-1',
        sellerName: 'ElectroVibe Stores',
        imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80',
        description: 'Industry-leading noise canceling headphones with dual processors and 8 microphones for superior audio clarity.',
        tagline: 'Pure Sound. Zero Noise.',
        brand: 'Sony',
        rating: 4.8,
        reviewsCount: 1420,
        tags: ['Audio', 'Headphones', 'Bestseller'],
        createdAt: '2026-10-15T10:00:00Z',
        status: 'In Stock',
      },
      {
        id: 'prod-s1-2',
        name: 'Mechanical Gaming Keyboard RGB',
        sku: 'ELE-RGB-02',
        category: 'Electronics',
        price: 4499,
        originalPrice: 5999,
        stock: 4,
        sellerId: 'seller-1',
        sellerName: 'ElectroVibe Stores',
        imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80',
        description: 'Tenkeyless tactile mechanical keyboard with customizable per-key RGB backlighting and aircraft aluminum frame.',
        tagline: 'High Precision Tactile Feedback',
        brand: 'VibeTech',
        rating: 4.7,
        reviewsCount: 890,
        tags: ['Gaming', 'Keyboard', 'RGB'],
        createdAt: '2026-10-18T14:30:00Z',
        status: 'Low Stock',
      },
      {
        id: 'prod-s1-3',
        name: 'Portable Bluetooth 5.3 Waterproof Speaker',
        sku: 'ELE-SPK-03',
        category: 'Electronics',
        price: 2799,
        originalPrice: 3499,
        stock: 35,
        sellerId: 'seller-1',
        sellerName: 'ElectroVibe Stores',
        imageUrl: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&auto=format&fit=crop&q=80',
        description: '360-degree immersive bass sound with IP67 waterproof rating, 20 hours continuous playtime and built-in powerbank.',
        tagline: 'Rugged Sound Anywhere',
        brand: 'SoundWave',
        rating: 4.6,
        reviewsCount: 630,
        tags: ['Speaker', 'Bluetooth', 'Waterproof'],
        createdAt: '2026-10-20T09:15:00Z',
        status: 'In Stock',
      },
      {
        id: 'prod-s1-4',
        name: 'Pro Wireless 4K Gaming Mouse',
        sku: 'ELE-MSE-04',
        category: 'Electronics',
        price: 3199,
        originalPrice: 4299,
        stock: 0,
        sellerId: 'seller-1',
        sellerName: 'ElectroVibe Stores',
        imageUrl: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&auto=format&fit=crop&q=80',
        description: 'Ultralight 58g ergonomic esports mouse with 26,000 DPI optical sensor and PTFE glide feet.',
        tagline: 'Ultralight Competitive Gaming',
        brand: 'VibeTech',
        rating: 4.9,
        reviewsCount: 410,
        tags: ['Gaming', 'Mouse', 'Esports'],
        createdAt: '2026-10-22T11:45:00Z',
        status: 'Out of Stock',
      },
      {
        id: 'prod-s2-1',
        name: 'Studio Reference Over-Ear Monitor Headphones',
        sku: 'AUD-STU-01',
        category: 'Audio',
        price: 11499,
        originalPrice: 13999,
        stock: 18,
        sellerId: 'seller-2',
        sellerName: 'SonicWave Audio',
        imageUrl: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&auto=format&fit=crop&q=80',
        description: 'Flat response frequency tuning for sound engineers, music producers, and audiophiles.',
        tagline: 'True-to-Master Acoustic Fidelity',
        brand: 'SonicWave',
        rating: 4.8,
        reviewsCount: 520,
        tags: ['Studio', 'Audio', 'Pro'],
        createdAt: '2026-10-12T08:00:00Z',
        status: 'In Stock',
      },
      {
        id: 'prod-s2-2',
        name: 'Hi-Fi Desktop DAC & Headphone Amp',
        sku: 'AUD-DAC-02',
        category: 'Audio',
        price: 8499,
        originalPrice: 9999,
        stock: 3,
        sellerId: 'seller-2',
        sellerName: 'SonicWave Audio',
        imageUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&auto=format&fit=crop&q=80',
        description: 'High-resolution digital-to-analog converter supporting 32-bit/768kHz and DSD512 decoding.',
        tagline: 'Audiophile Grade Soundstage',
        brand: 'SonicWave',
        rating: 4.9,
        reviewsCount: 280,
        tags: ['DAC', 'Hi-Fi', 'Amp'],
        createdAt: '2026-10-14T12:00:00Z',
        status: 'Low Stock',
      },
      {
        id: 'prod-s3-1',
        name: 'Ultra Slim Minimalist Leather Wallet',
        sku: 'FAS-WAL-01',
        category: 'Fashion',
        price: 1299,
        originalPrice: 1999,
        stock: 28,
        sellerId: 'seller-3',
        sellerName: 'Urban Threads Co.',
        imageUrl: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&auto=format&fit=crop&q=80',
        description: 'Handcrafted full-grain leather bifold with RFID blocking protection and slim profile card slots.',
        tagline: 'Everyday Minimalist Elegance',
        brand: 'UrbanCraft',
        rating: 4.6,
        reviewsCount: 380,
        tags: ['Leather', 'Wallet', 'Accessories'],
        createdAt: '2026-10-16T15:20:00Z',
        status: 'In Stock',
      },
      {
        id: 'prod-s3-2',
        name: 'Premium Canvas & Suede Weekend Travel Duffel',
        sku: 'FAS-BAG-02',
        category: 'Fashion',
        price: 3890,
        originalPrice: 5200,
        stock: 2,
        sellerId: 'seller-3',
        sellerName: 'Urban Threads Co.',
        imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80',
        description: 'Heavy-duty water-resistant canvas duffel with solid brass hardware, separate shoe pocket, and padded strap.',
        tagline: 'Built For The Long Weekend',
        brand: 'UrbanCraft',
        rating: 4.7,
        reviewsCount: 420,
        tags: ['Luggage', 'Travel', 'Bags'],
        createdAt: '2026-10-19T13:10:00Z',
        status: 'Low Stock',
      },
      {
        id: 'prod-s4-1',
        name: 'Ceramic Pour-Over Coffee Maker Set',
        sku: 'HOM-COF-01',
        category: 'Home & Kitchen',
        price: 1850,
        originalPrice: 2299,
        stock: 22,
        sellerId: 'seller-4',
        sellerName: 'Nordic Living Goods',
        imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80',
        description: 'Artisan ceramic dripper with wooden collar, heat-resistant borosilicate glass carafe, and 40 paper filters.',
        tagline: 'Slow Brew Morning Rituals',
        brand: 'NordicHome',
        rating: 4.9,
        reviewsCount: 245,
        tags: ['Coffee', 'Kitchen', 'Ceramic'],
        createdAt: '2026-10-17T07:45:00Z',
        status: 'In Stock',
      },
      {
        id: 'prod-s4-2',
        name: 'Organic Bamboo Ergonomic Laptop Stand',
        sku: 'HOM-STD-02',
        category: 'Home & Kitchen',
        price: 1450,
        originalPrice: 1890,
        stock: 0,
        sellerId: 'seller-4',
        sellerName: 'Nordic Living Goods',
        imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&auto=format&fit=crop&q=80',
        description: 'Sustainably sourced natural bamboo stand promoting ergonomic neck posture, with heat dissipation slots.',
        tagline: 'Eco-Friendly Work Ergonomics',
        brand: 'NordicHome',
        rating: 4.6,
        reviewsCount: 167,
        tags: ['Bamboo', 'Office', 'Eco'],
        createdAt: '2026-10-21T16:00:00Z',
        status: 'Out of Stock',
      },
    ];

    const seedOrders: SellerOrder[] = [
      {
        id: 'ord-s-101',
        orderNumber: 'ORD-2026-89421',
        createdAt: '2026-11-02T14:20:00Z',
        estimatedDeliveryDate: '2026-11-06T18:00:00Z',
        customerName: 'Aditya Deshmukh',
        customerEmail: 'aditya.deshmukh@gmail.com',
        customerPhone: '+91 98231 44521',
        shippingAddress: 'Flat 402, Royal Palms, Baner Road',
        shippingCity: 'Pune, Maharashtra',
        items: [
          {
            productId: 'prod-s1-1',
            productName: 'Sony WH-1000XM5 Noise Canceling Headphones',
            sku: 'ELE-XM5-01',
            price: 24990,
            quantity: 1,
            total: 24990,
            imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80',
          },
        ],
        itemCount: 1,
        totalAmount: 24990,
        paymentMethod: 'UPI / NetBanking',
        paymentStatus: 'Paid',
        status: 'Processing',
        trackingNumber: 'TRK-IN-984210',
      },
      {
        id: 'ord-s-102',
        orderNumber: 'ORD-2026-89354',
        createdAt: '2026-11-02T11:15:00Z',
        estimatedDeliveryDate: '2026-11-05T18:00:00Z',
        customerName: 'Sneha Kulkarni',
        customerEmail: 'sneha.k@outlook.com',
        customerPhone: '+91 98500 12849',
        shippingAddress: 'Row House 12, Nyati Estate, Mohammadwadi',
        shippingCity: 'Pune, Maharashtra',
        items: [
          {
            productId: 'prod-s1-2',
            productName: 'Mechanical Gaming Keyboard RGB',
            sku: 'ELE-RGB-02',
            price: 4499,
            quantity: 1,
            total: 4499,
            imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80',
          },
          {
            productId: 'prod-s1-3',
            productName: 'Portable Bluetooth 5.3 Waterproof Speaker',
            sku: 'ELE-SPK-03',
            price: 2799,
            quantity: 1,
            total: 2799,
            imageUrl: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&auto=format&fit=crop&q=80',
          },
        ],
        itemCount: 2,
        totalAmount: 7298,
        paymentMethod: 'Credit / Debit Card',
        paymentStatus: 'Paid',
        status: 'Confirmed',
        trackingNumber: 'TRK-IN-983540',
      },
      {
        id: 'ord-s-103',
        orderNumber: 'ORD-2026-88912',
        createdAt: '2026-11-01T09:40:00Z',
        estimatedDeliveryDate: '2026-11-04T18:00:00Z',
        customerName: 'Rohan Patil',
        customerEmail: 'rohan.patil99@gmail.com',
        customerPhone: '+91 97654 32100',
        shippingAddress: 'B-14, Green Valley Heights, Kothrud',
        shippingCity: 'Pune, Maharashtra',
        items: [
          {
            productId: 'prod-s1-3',
            productName: 'Portable Bluetooth 5.3 Waterproof Speaker',
            sku: 'ELE-SPK-03',
            price: 2799,
            quantity: 2,
            total: 5598,
            imageUrl: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&auto=format&fit=crop&q=80',
          },
        ],
        itemCount: 2,
        totalAmount: 5598,
        paymentMethod: 'UPI / NetBanking',
        paymentStatus: 'Paid',
        status: 'Shipped',
        trackingNumber: 'TRK-IN-889120',
      },
      {
        id: 'ord-s-104',
        orderNumber: 'ORD-2026-87401',
        createdAt: '2026-10-30T16:30:00Z',
        estimatedDeliveryDate: '2026-11-02T18:00:00Z',
        customerName: 'Pooja Sharma',
        customerEmail: 'pooja.sharma@yahoo.com',
        customerPhone: '+91 99220 87401',
        shippingAddress: 'Flat 701, Silver Birch, Powai',
        shippingCity: 'Mumbai, Maharashtra',
        items: [
          {
            productId: 'prod-s1-1',
            productName: 'Sony WH-1000XM5 Noise Canceling Headphones',
            sku: 'ELE-XM5-01',
            price: 24990,
            quantity: 1,
            total: 24990,
            imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80',
          },
        ],
        itemCount: 1,
        totalAmount: 24990,
        paymentMethod: 'Credit / Debit Card',
        paymentStatus: 'Paid',
        status: 'Delivered',
        trackingNumber: 'TRK-IN-874010',
      },
      {
        id: 'ord-s-105',
        orderNumber: 'ORD-2026-86990',
        createdAt: '2026-10-29T10:10:00Z',
        estimatedDeliveryDate: '2026-11-01T18:00:00Z',
        customerName: 'Vikram Mehta',
        customerEmail: 'vikram.mehta@techcorp.in',
        customerPhone: '+91 98201 66990',
        shippingAddress: 'Tower 3, Apt 1104, Hiranandani Gardens',
        shippingCity: 'Mumbai, Maharashtra',
        items: [
          {
            productId: 'prod-s2-1',
            productName: 'Studio Reference Over-Ear Monitor Headphones',
            sku: 'AUD-STU-01',
            price: 11499,
            quantity: 1,
            total: 11499,
            imageUrl: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&auto=format&fit=crop&q=80',
          },
          {
            productId: 'prod-s2-2',
            productName: 'Hi-Fi Desktop DAC & Headphone Amp',
            sku: 'AUD-DAC-02',
            price: 8499,
            quantity: 1,
            total: 8499,
            imageUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&auto=format&fit=crop&q=80',
          },
        ],
        itemCount: 2,
        totalAmount: 19998,
        paymentMethod: 'UPI / NetBanking',
        paymentStatus: 'Paid',
        status: 'Delivered',
        trackingNumber: 'TRK-IN-869900',
      },
      {
        id: 'ord-s-106',
        orderNumber: 'ORD-2026-85420',
        createdAt: '2026-10-28T18:45:00Z',
        estimatedDeliveryDate: '2026-10-31T18:00:00Z',
        customerName: 'Ananya Roy',
        customerEmail: 'ananya.roy@gmail.com',
        customerPhone: '+91 98310 85420',
        shippingAddress: '42 Lake View Road, Southern Avenue',
        shippingCity: 'Kolkata, West Bengal',
        items: [
          {
            productId: 'prod-s3-1',
            productName: 'Ultra Slim Minimalist Leather Wallet',
            sku: 'FAS-WAL-01',
            price: 1299,
            quantity: 2,
            total: 2598,
            imageUrl: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&auto=format&fit=crop&q=80',
          },
          {
            productId: 'prod-s3-2',
            productName: 'Premium Canvas & Suede Weekend Travel Duffel',
            sku: 'FAS-BAG-02',
            price: 3890,
            quantity: 1,
            total: 3890,
            imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80',
          },
        ],
        itemCount: 3,
        totalAmount: 6488,
        paymentMethod: 'Cash on Delivery',
        paymentStatus: 'Paid',
        status: 'Delivered',
        trackingNumber: 'TRK-IN-854200',
      },
      {
        id: 'ord-s-107',
        orderNumber: 'ORD-2026-84112',
        createdAt: '2026-10-27T12:05:00Z',
        estimatedDeliveryDate: '2026-10-30T18:00:00Z',
        customerName: 'Kavita Nair',
        customerEmail: 'kavita.nair@live.com',
        customerPhone: '+91 98450 84112',
        shippingAddress: 'Villa 18, Palm Meadows, Whitefield',
        shippingCity: 'Bengaluru, Karnataka',
        items: [
          {
            productId: 'prod-s4-1',
            productName: 'Ceramic Pour-Over Coffee Maker Set',
            sku: 'HOM-COF-01',
            price: 1850,
            quantity: 1,
            total: 1850,
            imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80',
          },
        ],
        itemCount: 1,
        totalAmount: 1850,
        paymentMethod: 'UPI / NetBanking',
        paymentStatus: 'Paid',
        status: 'Cancelled',
      },
    ];

    this.allProducts.set(seedProducts);
    this.allOrders.set(seedOrders);
    this.saveProductsToStorage();
    this.saveOrdersToStorage();
  }
}
