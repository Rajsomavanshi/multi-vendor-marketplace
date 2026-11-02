import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
  @Input() viewMode: 'grid' | 'list' = 'grid';

  @Output() viewDetails = new EventEmitter<Product>();
  @Output() addToCart = new EventEmitter<Product>();
  @Output() toggleWishlist = new EventEmitter<Product>();

  private readonly productService = inject(ProductService);

  get isWishlisted(): boolean {
    return this.productService.isWishlisted(this.product.id);
  }

  onCardClick(): void {
    this.viewDetails.emit(this.product);
  }

  onAddToCartClick(event: MouseEvent): void {
    event.stopPropagation();
    this.productService.addToCart(this.product, 1);
    this.addToCart.emit(this.product);
  }

  onWishlistClick(event: MouseEvent): void {
    event.stopPropagation();
    this.productService.toggleWishlist(this.product.id);
    this.toggleWishlist.emit(this.product);
  }

  getStarArray(rating: number): { full: boolean; half: boolean }[] {
    const stars: { full: boolean; half: boolean }[] = [];
    const rounded = Math.round(rating * 2) / 2;
    for (let i = 1; i <= 5; i++) {
      if (rounded >= i) {
        stars.push({ full: true, half: false });
      } else if (rounded === i - 0.5) {
        stars.push({ full: false, half: true });
      } else {
        stars.push({ full: false, half: false });
      }
    }
    return stars;
  }
}

