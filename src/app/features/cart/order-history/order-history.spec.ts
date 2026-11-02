import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { OrderHistory } from './order-history';
import { CartService } from '../../../core/services/cart.service';

describe('OrderHistory Component (Student 3)', () => {
  let component: OrderHistory;
  let fixture: ComponentFixture<OrderHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderHistory],
      providers: [provideRouter([]), CartService],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderHistory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create the OrderHistory component', () => {
    expect(component).toBeTruthy();
  });
});

