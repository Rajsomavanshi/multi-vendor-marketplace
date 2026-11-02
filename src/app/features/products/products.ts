import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Product } from '../../core/models/marketplace.models';
import { CartService } from '../../core/services/cart.service';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  private readonly productService = inject(ProductService);
  readonly cartService = inject(CartService);

  searchQuery = signal<string>('');
  selectedCategory = signal<string>('All');
  selectedSeller = signal<string>('All Sellers');
  sortBy = signal<string>('featured');
  toastMessage = signal<string | null>(null);

  readonly categories = computed(() => this.productService.getCategories());
  readonly sellers = computed(() => this.productService.getSellers());

  readonly filteredProducts = computed(() => {
    let list = this.productService.getAll();

    // Filter category
    if (this.selectedCategory() !== 'All') {
      list = list.filter((p) => p.category.toLowerCase() === this.selectedCategory().toLowerCase());
    }

    // Filter seller
    if (this.selectedSeller() !== 'All Sellers') {
      list = list.filter((p) => p.sellerName === this.selectedSeller());
    }

    // Filter search
    const query = this.searchQuery().trim().toLowerCase();
    if (query) {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.sellerName.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    // Sort
    const sort = this.sortBy();
    return [...list].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price;
      if (sort === 'price-high') return b.price - a.price;
      if (sort === 'rating') return b.rating - a.rating;
      return 0; // 'featured'
    });
  });

  addToCart(product: Product): void {
    this.cartService.addToCart(product, 1);
    this.showToast(`Added "${product.name}" to cart! 🛒`);
  }

  toggleWishlist(product: Product): void {
    const isAdded = this.cartService.toggleWishlist(product);
    this.showToast(isAdded ? `Added to Wishlist ❤️` : `Removed from Wishlist`);
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

