import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Cart } from './cart';
import { CartService } from '../../core/services/cart.service';

describe('Cart Component (Student 3)', () => {
  let component: Cart;
  let fixture: ComponentFixture<Cart>;
  let cartService: CartService;

  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({
      imports: [Cart],
      providers: [provideRouter([]), CartService],
    }).compileComponents();

    fixture = TestBed.createComponent(Cart);
    component = fixture.componentInstance;
    cartService = TestBed.inject(CartService);
    cartService.clearCart();
    cartService.clearWishlist();
    await fixture.whenStable();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should create the Cart component', () => {
    expect(component).toBeTruthy();
  });

  it('should add products to cart and support quantity changes and removal', () => {
    cartService.clearCart();
    expect(cartService.itemCount()).toBe(0);

    const product = {
      id: 'test-p1',
      name: 'Test Smart Watch',
      description: 'Test Desc',
      price: 1000,
      category: 'Wearables',
      sellerId: 's1',
      sellerName: 'Test Seller',
      sellerRating: 4.5,
      imageUrl: 'test.jpg',
      rating: 4.5,
      reviewCount: 10,
      inStock: true,
      stockCount: 5,
    };

    // Add to cart
    cartService.addToCart(product, 2);
    expect(cartService.itemCount()).toBe(2);
    expect(cartService.subtotal()).toBe(2000);

    // Quantity increment
    cartService.incrementQuantity('test-p1');
    expect(cartService.itemCount()).toBe(3);
    expect(cartService.subtotal()).toBe(3000);

    // Quantity decrement
    cartService.decrementQuantity('test-p1');
    expect(cartService.itemCount()).toBe(2);

    // Remove item
    cartService.removeFromCart('test-p1');
    expect(cartService.itemCount()).toBe(0);
  });

  it('should calculate subtotal, delivery charges, and total correctly', () => {
    cartService.clearCart();

    const lowPriceProduct = {
      id: 'test-p2',
      name: 'Coffee Mug',
      description: 'Mug',
      price: 200,
      category: 'Kitchen',
      sellerId: 's2',
      sellerName: 'Kitchen Store',
      sellerRating: 4.8,
      imageUrl: 'mug.jpg',
      rating: 4.8,
      reviewCount: 5,
      inStock: true,
      stockCount: 10,
    };

    cartService.addToCart(lowPriceProduct, 1);
    expect(cartService.subtotal()).toBe(200);
    // Standard delivery is ₹99 for orders below ₹999 threshold
    expect(cartService.deliveryCharge()).toBe(99);

    // Add more to exceed free delivery threshold (>= 999)
    cartService.updateQuantity('test-p2', 5); // 5 * 200 = 1000
    expect(cartService.subtotal()).toBe(1000);
    expect(cartService.isFreeDeliveryEligible()).toBe(true);
    expect(cartService.deliveryCharge()).toBe(0);

    // Grand total = subtotal - discount + delivery + 5% tax
    const expectedTax = Math.round(1000 * 0.05); // 50
    expect(cartService.estimatedTax()).toBe(expectedTax);
    expect(cartService.grandTotal()).toBe(1000 + 0 + expectedTax);
  });

  it('should move products between cart and wishlist', () => {
    cartService.clearCart();
    const product = {
      id: 'test-p3',
      name: 'Wireless Mouse',
      description: 'Mouse',
      price: 600,
      category: 'Electronics',
      sellerId: 's1',
      sellerName: 'Tech',
      sellerRating: 4.5,
      imageUrl: 'mouse.jpg',
      rating: 4.5,
      reviewCount: 10,
      inStock: true,
      stockCount: 5,
    };

    cartService.addToCart(product, 1);
    expect(cartService.cartItems().length).toBe(1);
    expect(cartService.wishlistItems().length).toBe(0);

    // Move to wishlist
    cartService.moveToWishlist('test-p3');
    expect(cartService.cartItems().length).toBe(0);
    expect(cartService.wishlistItems().length).toBe(1);

    // Move back to cart
    cartService.moveToCart('test-p3');
    expect(cartService.cartItems().length).toBe(1);
    expect(cartService.wishlistItems().length).toBe(0);
  });

  it('should apply discount when promo code is used', () => {
    cartService.clearCart();
    const product = {
      id: 'test-p4',
      name: 'Earbuds',
      description: 'Earbuds',
      price: 2000,
      category: 'Audio',
      sellerId: 's1',
      sellerName: 'AudioStore',
      sellerRating: 4.7,
      imageUrl: 'earbuds.jpg',
      rating: 4.7,
      reviewCount: 20,
      inStock: true,
      stockCount: 10,
    };

    cartService.addToCart(product, 1);
    const result = cartService.applyPromoCode('WELCOME10');
    expect(result.success).toBe(true);
    // 10% of 2000 = 200
    expect(cartService.discountAmount()).toBe(200);
  });
});
