import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;
  let productService: ProductService;

  const mockProduct: Product = {
    id: 'test-2',
    name: 'Smart Running Shoes',
    tagline: 'Engineered for marathons',
    description: 'Lightweight responsive cushioning.',
    price: 120.0,
    originalPrice: 150.0,
    discountPercent: 20,
    category: 'Fitness & Sports',
    brand: 'Apex Gear',
    seller: {
      id: 'seller-5',
      name: 'Apex Activewear',
      rating: 4.6,
      salesCount: 1200,
      isVerified: true,
      location: 'Denver, CO'
    },
    rating: 4.8,
    reviewsCount: 45,
    stock: 15,
    sku: 'APX-SH-02',
    imageUrl: 'https://example.com/shoes.jpg',
    galleryImages: ['https://example.com/shoes1.jpg', 'https://example.com/shoes2.jpg'],
    features: ['Carbon plate', 'Breathable mesh'],
    specifications: { Weight: '220g' },
    tags: ['Running'],
    createdAt: '2026-01-01',
    reviews: [
      {
        id: 'rev-1',
        userName: 'John Doe',
        rating: 5,
        date: '2026-02-01',
        title: 'Super fast shoes',
        comment: 'Ran a PR in these!',
        verifiedPurchase: true,
        helpfulCount: 5
      }
    ]
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailComponent],
      providers: [provideRouter([]), ProductService]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    component.productInput = mockProduct;
    productService = TestBed.inject(ProductService);
    fixture.detectChanges();
  });

  it('should create product detail component', () => {
    expect(component).toBeTruthy();
  });

  it('should display product title and full details', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.detail-title')?.textContent).toContain('Smart Running Shoes');
    expect(compiled.querySelector('.price-tag')?.textContent).toContain('120.00');
  });

  it('should increment and decrement quantity properly', () => {
    expect(component.quantity).toBe(1);
    component.incrementQty();
    expect(component.quantity).toBe(2);
    component.decrementQty();
    expect(component.quantity).toBe(1);
    component.decrementQty(); // should not go below 1
    expect(component.quantity).toBe(1);
  });

  it('should calculate savings correctly', () => {
    expect(component.savings).toBe(30.0);
  });

  it('should add to cart with selected quantity', () => {
    const addToCartSpy = vi.spyOn(productService, 'addToCart');
    component.quantity = 3;
    component.onAddToCart();
    expect(addToCartSpy).toHaveBeenCalledWith(mockProduct, 3);
  });
});

