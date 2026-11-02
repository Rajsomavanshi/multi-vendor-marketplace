import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCardComponent } from './product-card.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;
  let productService: ProductService;

  const mockProduct: Product = {
    id: 'test-1',
    name: 'Wireless Keyboard',
    tagline: 'Sleek mechanical keyboard',
    description: 'High quality wireless mechanical keyboard.',
    price: 99.99,
    originalPrice: 129.99,
    discountPercent: 23,
    category: 'Electronics & Gadgets',
    brand: 'ElectroTech',
    seller: {
      id: 'seller-1',
      name: 'ElectroTech Store',
      rating: 4.8,
      salesCount: 1500,
      isVerified: true,
      location: 'New York, NY'
    },
    rating: 4.7,
    reviewsCount: 88,
    stock: 12,
    sku: 'ET-KB-01',
    imageUrl: 'https://example.com/keyboard.jpg',
    galleryImages: ['https://example.com/keyboard.jpg'],
    features: ['Mechanical Switches', 'RGB Backlight'],
    specifications: { Switch: 'Brown' },
    tags: ['Keyboard'],
    createdAt: '2026-01-01',
    reviews: []
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardComponent],
      providers: [ProductService]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    component.product = mockProduct;
    productService = TestBed.inject(ProductService);
    fixture.detectChanges();
  });

  it('should create product card', () => {
    expect(component).toBeTruthy();
  });

  it('should display product title and price', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.product-title')?.textContent).toContain('Wireless Keyboard');
    expect(compiled.querySelector('.current-price')?.textContent).toContain('99.99');
  });

  it('should display seller name and category pill', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.seller-name')?.textContent).toContain('ElectroTech Store');
    expect(compiled.querySelector('.category-pill')?.textContent).toContain('Electronics & Gadgets');
  });

  it('should emit viewDetails event when card is clicked', () => {
    let emittedProduct: Product | undefined;
    component.viewDetails.subscribe((p) => (emittedProduct = p));

    component.onCardClick();
    expect(emittedProduct).toBe(mockProduct);
  });

  it('should add product to cart when Add button is clicked', () => {
    const addToCartSpy = vi.spyOn(productService, 'addToCart');
    const mockEvent = new MouseEvent('click');
    vi.spyOn(mockEvent, 'stopPropagation');

    component.onAddToCartClick(mockEvent);
    expect(mockEvent.stopPropagation).toHaveBeenCalled();
    expect(addToCartSpy).toHaveBeenCalledWith(mockProduct, 1);
  });
});

