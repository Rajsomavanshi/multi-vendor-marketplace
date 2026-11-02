import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CartItem } from '../../core/models/marketplace.models';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  readonly cartService = inject(CartService);
  private readonly router = inject(Router);

  promoCodeInput = signal('');
  promoFeedback = signal<{ success: boolean; message: string } | null>(null);
  toastMessage = signal<string | null>(null);

  // Group items by seller for a true multi-vendor experience
  readonly groupedBySeller = computed(() => {
    const items = this.cartService.cartItems();
    const map = new Map<string, { sellerName: string; sellerRating: number; items: CartItem[] }>();

    for (const item of items) {
      const sellerId = item.product.sellerId;
      if (!map.has(sellerId)) {
        map.set(sellerId, {
          sellerName: item.product.sellerName,
          sellerRating: item.product.sellerRating,
          items: [],
        });
      }
      map.get(sellerId)!.items.push(item);
    }

    return Array.from(map.entries()).map(([sellerId, data]) => ({
      sellerId,
      ...data,
    }));
  });

  onQuantityChange(productId: string, event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = parseInt(input.value, 10);
    if (!isNaN(value) && value > 0) {
      this.cartService.updateQuantity(productId, value);
    } else {
      input.value = '1';
      this.cartService.updateQuantity(productId, 1);
    }
  }

  increment(productId: string): void {
    this.cartService.incrementQuantity(productId);
  }

  decrement(productId: string): void {
    this.cartService.decrementQuantity(productId);
  }

  removeItem(productId: string, productName: string): void {
    this.cartService.removeFromCart(productId);
    this.showToast(`Removed "${productName}" from cart`);
  }

  moveToWishlist(productId: string, productName: string): void {
    this.cartService.moveToWishlist(productId);
    this.showToast(`Moved "${productName}" to wishlist`);
  }

  clearAll(): void {
    if (confirm('Are you sure you want to remove all items from your cart?')) {
      this.cartService.clearCart();
      this.showToast('Cart has been cleared');
    }
  }

  applyPromo(): void {
    const code = this.promoCodeInput().trim();
    if (!code) return;

    const result = this.cartService.applyPromoCode(code);
    this.promoFeedback.set(result);
    if (result.success) {
      this.promoCodeInput.set('');
    }
  }

  removePromo(): void {
    this.cartService.removePromoCode();
    this.promoFeedback.set({ success: true, message: 'Promo code removed' });
  }

  loadSampleCart(): void {
    this.cartService.seedDefaultItems();
    this.showToast('Demo items added to cart!');
  }

  proceedToCheckout(): void {
    if (this.cartService.cartItems().length > 0) {
      this.router.navigate(['/checkout']);
    }
  }

  showToast(message: string): void {
    this.toastMessage.set(message);
    setTimeout(() => {
      this.toastMessage.set(null);
    }, 3000);
  }
}

