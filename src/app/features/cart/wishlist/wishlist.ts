import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css',
})
export class Wishlist {
  readonly cartService = inject(CartService);

  toastMessage = signal<string | null>(null);

  moveToCart(productId: string, productName: string): void {
    this.cartService.moveToCart(productId);
    this.showToast(`Moved "${productName}" to shopping cart!`);
  }

  removeFromWishlist(productId: string, productName: string): void {
    this.cartService.removeFromWishlist(productId);
    this.showToast(`Removed "${productName}" from wishlist`);
  }

  moveAllToCart(): void {
    const count = this.cartService.wishlistCount();
    if (count === 0) return;
    this.cartService.moveAllWishlistToCart();
    this.showToast(`Moved all ${count} items to your shopping cart!`);
  }

  showToast(message: string): void {
    this.toastMessage.set(message);
    setTimeout(() => {
      this.toastMessage.set(null);
    }, 3000);
  }
}

