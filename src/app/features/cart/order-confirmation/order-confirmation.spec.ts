import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { OrderConfirmation } from './order-confirmation';
import { CartService } from '../../../core/services/cart.service';

describe('OrderConfirmation Component (Student 3)', () => {
  let component: OrderConfirmation;
  let fixture: ComponentFixture<OrderConfirmation>;
  let cartService: CartService;

  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({
      imports: [OrderConfirmation],
      providers: [provideRouter([]), CartService],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderConfirmation);
    component = fixture.componentInstance;
    cartService = TestBed.inject(CartService);

    // Seed a mock order
    cartService.createOrder(
      {
        fullName: 'Test User',
        email: 'test@example.com',
        phone: '9999999999',
        street: '123 Test St',
        city: 'Mumbai',
        state: 'Maharashtra',
        zipCode: '400001',
        country: 'India',
        addressType: 'Home',
      },
      'Credit / Debit Card'
    );

    fixture.detectChanges();
    await fixture.whenStable();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should create the OrderConfirmation component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the confirmed order details', () => {
    expect(component.order()).toBeTruthy();
    expect(component.order()?.shippingAddress.fullName).toBe('Test User');
    expect(component.order()?.orderStatus).toBe('Confirmed');
  });
});

