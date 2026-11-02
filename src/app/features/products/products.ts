
import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import {
  Product,
  ProductFilterCriteria,
  SellerInfo,
  SortOption
} from './models/product.model';

import { ProductService } from './services/product.service';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

import { CartService } from '../../core/services/cart.service';
import {
  Product as CartProduct
} from '../../core/models/marketplace.models';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ProductCardComponent,
    ProductDetailComponent
  ],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {

  protected readonly productService = inject(ProductService);
  readonly cartService = inject(CartService);

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  toastMessage = signal<string | null>(null);

  searchQuery: string = '';
  selectedCategory: string = 'All';
  selectedSellerId: string = 'All';

  minPrice: number | null = null;
  maxPrice: number | null = null;
  minRating: number = 0;
  inStockOnly: boolean = false;

  sortBy: SortOption = 'featured';
  viewMode: 'grid' | 'list' = 'grid';
  showMobileFilters: boolean = false;

  selectedProduct: Product | null = null;

  categories: string[] = [];
  sellers: SellerInfo[] = [];
  filteredProducts: Product[] = [];

  ngOnInit(): void {
    this.categories = [
      'All',
      ...this.productService.getCategories()
    ];

    this.sellers = this.productService.getSellers();

    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');

      if (id) {
        const product = this.productService.getProductById(id);
        if (product) {
          this.selectedProduct = product;
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

    this.filteredProducts =
      this.productService.filterProducts(criteria);
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
      this.inStockOnly
    );
  }

  get activeFilterCount(): number {
    let count = 0;

    if (this.searchQuery.trim()) count++;
    if (this.selectedCategory !== 'All') count++;
    if (this.selectedSellerId !== 'All') count++;
    if (this.minPrice !== null) count++;
    if (this.maxPrice !== null) count++;
    if (this.minRating > 0) count++;
    if (this.inStockOnly) count++;

    return count;
  }

  getCategoryCount(category: string): number {
    const products = this.productService.getProducts();

    if (category === 'All') {
      return products.length;
    }

    return products.filter(
      product =>
        product.category.toLowerCase() === category.toLowerCase()
    ).length;
  }

  openProductDetail(product: Product): void {
    this.selectedProduct = product;
    this.router.navigate(['/products', product.id]);
  }

  closeProductDetail(): void {
    this.selectedProduct = null;
    this.router.navigate(['/products']);
  }

  toggleMobileFilters(): void {
    this.showMobileFilters = !this.showMobileFilters;
  }

  // Convert development Product model into Cart Product model.
  private convertProduct(product: Product): CartProduct {
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      originalPrice: product.originalPrice,
      category: product.category,
      sellerId: product.seller.id,
      sellerName: product.seller.name,
      sellerRating: product.seller.rating,
      imageUrl: product.imageUrl,
      rating: product.rating,
      reviewCount: product.reviewsCount,
      inStock: product.stock > 0,
      stockCount: product.stock,
      tags: product.tags
    };
  }

  // Add product to the shared cart.
  addToCart(product: Product): void {
    if (product.stock <= 0) {
      this.showToast('Product is out of stock!');
      return;
    }

    this.cartService.addToCart(
      this.convertProduct(product),
      1
    );

    this.showToast(`${product.name} added to cart!`);
  }

  // Add or remove product from the shared wishlist.
  toggleWishlist(product: Product): void {
    const added = this.cartService.toggleWishlist(
      this.convertProduct(product)
    );

    this.showToast(
      added
        ? 'Added to Wishlist ❤️'
        : 'Removed from Wishlist'
    );
  }

  isInWishlist(productId: string): boolean {
    return this.cartService.isInWishlist(productId);
  }

  showToast(message: string): void {
    this.toastMessage.set(message);

    setTimeout(() => {
      this.toastMessage.set(null);
    }, 2500);
  }
}
