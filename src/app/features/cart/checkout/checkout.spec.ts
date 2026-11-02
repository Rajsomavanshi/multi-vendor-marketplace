import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Checkout } from './checkout';
import { CartService } from '../../../core/services/cart.service';

describe('Checkout Component (Student 3)', () => {
  let component: Checkout;
  let fixture: ComponentFixture<Checkout>;
  let cartService: CartService;

  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({
      imports: [Checkout],
      providers: [provideRouter([]), CartService],
    }).compileComponents();

    fixture = TestBed.createComponent(Checkout);
    component = fixture.componentInstance;
    cartService = TestBed.inject(CartService);
    await fixture.whenStable();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should create the Checkout component', () => {
    expect(component).toBeTruthy();
  });

  it('should auto-fill demo address for rapid testing', () => {
    expect(component.address.fullName).toBe('');
    component.fillDemoAddress();
    expect(component.address.fullName).toBe('Rahul Sharma');
    expect(component.address.city).toBe('Bengaluru');
    expect(component.validateAddress()).toBe(true);
  });

  it('should create an order with mock data and clear cart', () => {
    cartService.clearCart();
    cartService.addToCart({
      id: 'test-chk-1',
      name: 'Test Earphones',
      description: 'Desc',
      price: 1500,
      category: 'Audio',
      sellerId: 's1',
      sellerName: 'Apex Electronics',
      sellerRating: 4.8,
      imageUrl: 'test.jpg',
      rating: 4.8,
      reviewCount: 15,
      inStock: true,
      stockCount: 10,
    }, 1);

    expect(cartService.cartItems().length).toBe(1);

    component.fillDemoAddress();
    const order = cartService.createOrder(component.address, 'Credit / Debit Card');

    expect(order).toBeTruthy();
    expect(order.id).toContain('ORD-');
    expect(order.items.length).toBe(1);
    expect(order.paymentMethod).toBe('Credit / Debit Card');
    expect(order.paymentStatus).toBe('Paid');
    // Cart is cleared after order
    expect(cartService.cartItems().length).toBe(0);
    // Order is saved in order history
    expect(cartService.orders().length).toBeGreaterThan(0);
  });
});

