import { Injectable, signal, computed } from '@angular/core';
import { Product, ProductFilterCriteria, SellerInfo, SortOption } from '../models/product.model';
import { MOCK_SELLERS, MOCK_PRODUCTS } from '../data/mock-products.data';

export interface CartItemNotification {
  message: string;
  type: 'success' | 'info';
  timestamp: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly mockSellers: SellerInfo[] = MOCK_SELLERS;
  private readonly mockProducts: Product[] = MOCK_PRODUCTS;

  // State Signals
  readonly products = signal<Product[]>(this.mockProducts);
  readonly sellers = signal<SellerInfo[]>(this.mockSellers);
  readonly activeNotification = signal<CartItemNotification | null>(null);

  // Cart & Wishlist state to integrate with Student 3
  readonly cartItems = signal<{ product: Product; quantity: number }[]>([]);
  readonly wishlistProductIds = signal<Set<string>>(new Set<string>());

  readonly cartCount = computed(() =>
    this.cartItems().reduce((total, item) => total + item.quantity, 0)
  );

  readonly wishlistCount = computed(() => this.wishlistProductIds().size);

  getProducts(): Product[] {
    return this.products();
  }

  getProductById(id: string): Product | undefined {
    return this.products().find((p) => p.id === id);
  }

  getCategories(): string[] {
    const categories: string[] = [];
    for (const p of this.mockProducts) {
      if (!categories.includes(p.category)) {
        categories.push(p.category);
      }
    }
    return categories;
  }

  getSellers(): SellerInfo[] {
    return this.mockSellers;
  }

  getRelatedProducts(productId: string, limit: number = 4): Product[] {
    const current = this.getProductById(productId);
    if (!current) return this.mockProducts.slice(0, limit);

    return this.mockProducts
      .filter((p) => p.id !== productId && (p.category === current.category || p.seller.id === current.seller.id))
      .slice(0, limit);
  }

  filterProducts(criteria: ProductFilterCriteria): Product[] {
    let result = [...this.mockProducts];

    // Search query (matches title, tagline, description, category, brand, or seller name)
    if (criteria.searchQuery && criteria.searchQuery.trim() !== '') {
      const query = criteria.searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.tagline.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query) ||
          p.seller.name.toLowerCase().includes(query) ||
          p.tags.some((t) => t.toLowerCase().includes(query))
      );
    }

    // Category filter
    if (criteria.category && criteria.category !== 'All') {
      result = result.filter((p) => p.category === criteria.category);
    }

    // Seller filter
    if (criteria.sellerId && criteria.sellerId !== 'All') {
      result = result.filter((p) => p.seller.id === criteria.sellerId);
    }

    // Min price
    if (criteria.minPrice !== null && criteria.minPrice > 0) {
      result = result.filter((p) => p.price >= criteria.minPrice!);
    }

    // Max price
    if (criteria.maxPrice !== null && criteria.maxPrice > 0) {
      result = result.filter((p) => p.price <= criteria.maxPrice!);
    }

    // Min rating
    if (criteria.minRating > 0) {
      result = result.filter((p) => p.rating >= criteria.minRating);
    }

    // In-stock only
    if (criteria.inStockOnly) {
      result = result.filter((p) => p.stock > 0);
    }

    // Sorting
    result = this.sortProducts(result, criteria.sortBy);

    return result;
  }

  private sortProducts(items: Product[], sortBy: SortOption): Product[] {
    const sorted = [...items];
    switch (sortBy) {
      case 'price-asc':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return sorted.sort((a, b) => b.price - a.price);
      case 'rating-desc':
        return sorted.sort((a, b) => b.rating - a.rating);
      case 'name-asc':
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case 'name-desc':
        return sorted.sort((a, b) => b.name.localeCompare(a.name));
      case 'newest':
        return sorted.sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      case 'featured':
      default:
        return sorted.sort((a, b) => {
          if (a.isFeatured === b.isFeatured) {
            return (b.reviewsCount || 0) - (a.reviewsCount || 0);
          }
          return a.isFeatured ? -1 : 1;
        });
    }
  }

  // Cart & Wishlist integration actions
  addToCart(product: Product, quantity: number = 1): void {
    const currentItems = [...this.cartItems()];
    const existingIndex = currentItems.findIndex((item) => item.product.id === product.id);

    if (existingIndex > -1) {
      currentItems[existingIndex].quantity += quantity;
    } else {
      currentItems.push({ product, quantity });
    }

    this.cartItems.set(currentItems);
    this.notify(`Added "${product.name}" to cart (${quantity}x)`);
  }

  toggleWishlist(productId: string): boolean {
    const current = new Set(this.wishlistProductIds());
    let added = false;
    if (current.has(productId)) {
      current.delete(productId);
      this.notify('Removed product from wishlist', 'info');
    } else {
      current.add(productId);
      added = true;
      const product = this.getProductById(productId);
      this.notify(`Added "${product?.name || 'Item'}" to your wishlist!`);
    }
    this.wishlistProductIds.set(current);
    return added;
  }

  isWishlisted(productId: string): boolean {
    return this.wishlistProductIds().has(productId);
  }

  notify(message: string, type: 'success' | 'info' = 'success'): void {
    this.activeNotification.set({ message, type, timestamp: Date.now() });
    setTimeout(() => {
      this.activeNotification.set(null);
    }, 3200);
  }
}
