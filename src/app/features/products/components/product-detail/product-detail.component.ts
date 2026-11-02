import { Component, Input, Output, EventEmitter, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  @Input() productInput?: Product;
  @Output() back = new EventEmitter<void>();
  @Output() selectProduct = new EventEmitter<Product>();

  private readonly productService = inject(ProductService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  product?: Product;
  selectedImage: string = '';
  quantity: number = 1;
  activeTab: 'description' | 'specifications' | 'reviews' = 'description';

  ngOnInit(): void {
    if (this.productInput) {
      this.setProduct(this.productInput);
    } else {
      // Check route param id
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        const found = this.productService.getProductById(id);
        if (found) {
          this.setProduct(found);
        }
      }
    }
  }

  setProduct(p: Product): void {
    this.product = p;
    this.selectedImage = p.imageUrl;
    this.quantity = 1;
    this.activeTab = 'description';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  get isWishlisted(): boolean {
    return this.product ? this.productService.isWishlisted(this.product.id) : false;
  }

  get savings(): number {
    if (!this.product || this.product.originalPrice <= this.product.price) return 0;
    return this.product.originalPrice - this.product.price;
  }

  get relatedProducts(): Product[] {
    if (!this.product) return [];
    return this.productService.getRelatedProducts(this.product.id, 4);
  }

  get specEntries(): [string, string][] {
    if (!this.product?.specifications) return [];
    return Object.entries(this.product.specifications);
  }

  onSelectRelated(prod: Product): void {
    this.setProduct(prod);
    this.selectProduct.emit(prod);
  }

  incrementQty(): void {
    if (this.product && this.quantity < this.product.stock) {
      this.quantity++;
    }
  }

  decrementQty(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  onAddToCart(): void {
    if (this.product) {
      this.productService.addToCart(this.product, this.quantity);
    }
  }

  onBuyNow(): void {
    if (this.product) {
      this.productService.addToCart(this.product, this.quantity);
      this.router.navigate(['/cart']);
    }
  }

  onToggleWishlist(): void {
    if (this.product) {
      this.productService.toggleWishlist(this.product.id);
    }
  }

  onBackClick(): void {
    this.back.emit();
  }

  getRatingCount(stars: number): number {
    if (!this.product?.reviews) return 0;
    return this.product.reviews.filter((r) => r.rating === stars).length;
  }

  getRatingPercentage(stars: number): number {
    if (!this.product?.reviews || this.product.reviews.length === 0) return 0;
    const count = this.getRatingCount(stars);
    return Math.round((count / this.product.reviews.length) * 100);
  }
}

