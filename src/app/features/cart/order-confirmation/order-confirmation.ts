import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Order } from '../../../core/models/marketplace.models';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-order-confirmation',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './order-confirmation.html',
  styleUrl: './order-confirmation.css',
})
export class OrderConfirmation implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly cartService = inject(CartService);

  order = signal<Order | null>(null);

  ngOnInit(): void {
    const orderId = this.route.snapshot.paramMap.get('id');
    if (orderId) {
      const found = this.cartService.getOrderById(orderId);
      if (found) {
        this.order.set(found);
        return;
      }
    }

    // Fallback to the latest order in service or orders list
    const latest = this.cartService.lastCompletedOrder() || this.cartService.orders()[0] || null;
    this.order.set(latest);
  }

  printReceipt(): void {
    window.print();
  }
}

