import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, ProductFilterCriteria, SellerInfo, SortOption } from './models/product.model';
import { ProductService, CartItemNotification } from './services/product.service';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCardComponent, ProductDetailComponent],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {
  protected readonly productService = inject(ProductService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  // Filter Criteria State
  searchQuery: string = '';
  selectedCategory: string = 'All';
  selectedSellerId: string = 'All';
  minPrice: number | null = null;
  maxPrice: number | null = null;
  minRating: number = 0;
  inStockOnly: boolean = false;
  sortBy: SortOption = 'featured';

  // Layout & UI State
  viewMode: 'grid' | 'list' = 'grid';
  showMobileFilters: boolean = false;
  selectedProduct: Product | null = null;

  // Available Filter Options
  categories: string[] = [];
  sellers: SellerInfo[] = [];

  // Filtered Products Output
  filteredProducts: Product[] = [];

  ngOnInit(): void {
    this.categories = ['All', ...this.productService.getCategories()];
    this.sellers = this.productService.getSellers();

    // Check if route has an id (e.g. /products/:id)
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        const prod = this.productService.getProductById(id);
        if (prod) {
          this.selectedProduct = prod;
        }
      } else {
        this.selectedProduct = null;
      }
    });

    this.applyFilters();
  }

  applyFilters(): void {
    const criteria: ProductFilterCriteria = {
      searchQuery: this.searchQuery,
      category: this.selectedCategory,
      sellerId: this.selectedSellerId,
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      minRating: this.minRating,
      inStockOnly: this.inStockOnly,
      sortBy: this.sortBy
    };

    this.filteredProducts = this.productService.filterProducts(criteria);
  }

  onSearchChange(): void {
    this.applyFilters();
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.applyFilters();
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.applyFilters();
  }

  onFilterChange(): void {
    this.applyFilters();
  }

  resetFilters(): void {
    this.searchQuery = '';
    this.selectedCategory = 'All';
    this.selectedSellerId = 'All';
    this.minPrice = null;
    this.maxPrice = null;
    this.minRating = 0;
    this.inStockOnly = false;
    this.sortBy = 'featured';
    this.applyFilters();
  }

  hasActiveFilters(): boolean {
    return (
      this.searchQuery.trim() !== '' ||
      this.selectedCategory !== 'All' ||
      this.selectedSellerId !== 'All' ||
      this.minPrice !== null ||
      this.maxPrice !== null ||
      this.minRating > 0 ||
      this.inStockOnly ||
      this.sortBy !== 'featured'
    );
  }

  get activeFilterCount(): number {
    let count = 0;
    if (this.searchQuery.trim() !== '') count++;
    if (this.selectedCategory !== 'All') count++;
    if (this.selectedSellerId !== 'All') count++;
    if (this.minPrice !== null || this.maxPrice !== null) count++;
    if (this.minRating > 0) count++;
    if (this.inStockOnly) count++;
    return count;
  }

  getCategoryCount(category: string): number {
    const all = this.productService.getProducts();
    if (category === 'All') return all.length;
    return all.filter((p) => p.category === category).length;
  }

  // Product Selection & Details view
  openProductDetail(product: Product): void {
    this.selectedProduct = product;
    // Update URL without full page reload
    this.router.navigate(['/products', product.id]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  closeProductDetail(): void {
    this.selectedProduct = null;
    this.router.navigate(['/products']);
  }

  toggleMobileFilters(): void {
    this.showMobileFilters = !this.showMobileFilters;
  }
}
