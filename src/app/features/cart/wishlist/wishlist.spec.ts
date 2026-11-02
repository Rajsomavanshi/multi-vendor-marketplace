import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Wishlist } from './wishlist';
import { CartService } from '../../../core/services/cart.service';

describe('Wishlist Component (Student 3)', () => {
  let component: Wishlist;
  let fixture: ComponentFixture<Wishlist>;
  let cartService: CartService;

  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({
      imports: [Wishlist],
      providers: [provideRouter([]), CartService],
    }).compileComponents();

    fixture = TestBed.createComponent(Wishlist);
    component = fixture.componentInstance;
    cartService = TestBed.inject(CartService);
    await fixture.whenStable();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should create the Wishlist component', () => {
    expect(component).toBeTruthy();
  });

  it('should move an item from wishlist to cart', () => {
    cartService.clearCart();
    cartService.clearWishlist();

    const product = {
      id: 'w-item-1',
      name: 'Ceramic Mug',
      description: 'Mug description',
      price: 500,
      category: 'Kitchen',
      sellerId: 's3',
      sellerName: 'Nordic Co.',
      sellerRating: 4.9,
      imageUrl: 'mug.jpg',
      rating: 4.9,
      reviewCount: 12,
      inStock: true,
      stockCount: 10,
    };

    cartService.addToWishlist(product);
    expect(cartService.wishlistCount()).toBe(1);
    expect(cartService.itemCount()).toBe(0);

    component.moveToCart('w-item-1', 'Ceramic Mug');
    expect(cartService.wishlistCount()).toBe(0);
    expect(cartService.itemCount()).toBe(1);
  });
});

