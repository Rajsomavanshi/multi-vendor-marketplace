import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Products } from './products';
import { ProductService } from './services/product.service';

describe('Products Component (Student 2: Product Catalogue & Search)', () => {
  let component: Products;
  let fixture: ComponentFixture<Products>;
  let productService: ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Products],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Products);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService);
    await fixture.whenStable();
  });

  it('should create the Products component', () => {
    expect(component).toBeTruthy();
  });

  it('should have 100 total products across 10 categories (10 per category)', () => {
    const allProducts = productService.getProducts();
    expect(allProducts.length).toBe(100);

    const categories = productService.getCategories();
    expect(categories.length).toBe(10);

    for (const cat of categories) {
      const itemsInCat = allProducts.filter((p) => p.category === cat);
      expect(itemsInCat.length).toBe(10);
    }
  });

  it('should initialize with products in catalogue', () => {
    expect(component.filteredProducts.length).toBe(100);
    // Categories include 'All' + 10 categories = 11
    expect(component.categories.length).toBe(11);
    expect(component.sellers.length).toBe(10);
  });

  it('should filter products by category', () => {
    component.selectCategory('Electronics & Gadgets');
    expect(component.selectedCategory).toBe('Electronics & Gadgets');
    expect(component.filteredProducts.length).toBe(10);
    expect(component.filteredProducts.every((p) => p.category === 'Electronics & Gadgets')).toBe(true);
  });

  it('should filter products by newly added categories', () => {
    // Beauty & Personal Care
    component.selectCategory('Beauty & Personal Care');
    expect(component.filteredProducts.length).toBe(10);
    expect(component.filteredProducts.every((p) => p.category === 'Beauty & Personal Care')).toBe(true);

    // Toys & Video Games
    component.selectCategory('Toys & Video Games');
    expect(component.filteredProducts.length).toBe(10);
    expect(component.filteredProducts.every((p) => p.category === 'Toys & Video Games')).toBe(true);

    // Automotive & Tools
    component.selectCategory('Automotive & Tools');
    expect(component.filteredProducts.length).toBe(10);
    expect(component.filteredProducts.every((p) => p.category === 'Automotive & Tools')).toBe(true);

    // Jewelry & Accessories
    component.selectCategory('Jewelry & Accessories');
    expect(component.filteredProducts.length).toBe(10);
    expect(component.filteredProducts.every((p) => p.category === 'Jewelry & Accessories')).toBe(true);
  });

  it('should filter products by search query', () => {
    component.searchQuery = 'Headphones';
    component.onSearchChange();
    expect(
      component.filteredProducts.some((p) =>
        p.name.toLowerCase().includes('headphones') || p.description.toLowerCase().includes('headphones')
      )
    ).toBe(true);
  });

  it('should show empty-result state when search has no matches', () => {
    component.searchQuery = 'NonExistentProductQueryXYZ12345';
    component.onSearchChange();
    expect(component.filteredProducts.length).toBe(0);
  });

  it('should sort products by price ascending', () => {
    component.sortBy = 'price-asc';
    component.onFilterChange();
    const prices = component.filteredProducts.map((p) => p.price);
    for (let i = 0; i < prices.length - 1; i++) {
      expect(prices[i]).toBeLessThanOrEqual(prices[i + 1]);
    }
  });

  it('should sort products by price descending', () => {
    component.sortBy = 'price-desc';
    component.onFilterChange();
    const prices = component.filteredProducts.map((p) => p.price);
    for (let i = 0; i < prices.length - 1; i++) {
      expect(prices[i]).toBeGreaterThanOrEqual(prices[i + 1]);
    }
  });

  it('should reset all filters to default state', () => {
    component.searchQuery = 'Custom';
    component.selectedCategory = 'Audio & Sound';
    component.sortBy = 'price-asc';
    component.minPrice = 50;
    component.applyFilters();

    component.resetFilters();
    expect(component.searchQuery).toBe('');
    expect(component.selectedCategory).toBe('All');
    expect(component.sortBy).toBe('featured');
    expect(component.minPrice).toBeNull();
    expect(component.filteredProducts.length).toBe(100);
  });
});
