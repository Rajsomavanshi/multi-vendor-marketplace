
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Order {
  id: string;
  customer: string;
  product: string;
  amount: number;
  status: string;
}

@Component({
  selector: 'app-order-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-management.html',
  styleUrl: './order-management.css'
})
export class OrderManagement {

  orders: Order[] = [
    {
      id: 'ORD001',
      customer: 'Rahul Sharma',
      product: 'Wireless Headphones',
      amount: 2499,
      status: 'Pending'
    },
    {
      id: 'ORD002',
      customer: 'Priya Patil',
      product: 'Smart Watch',
      amount: 3999,
      status: 'Shipped'
    },
    {
      id: 'ORD003',
      customer: 'Amit Verma',
      product: 'Laptop Bag',
      amount: 1299,
      status: 'Delivered'
    },
    {
      id: 'ORD004',
      customer: 'Sneha Joshi',
      product: 'Bluetooth Speaker',
      amount: 1999,
      status: 'Cancelled'
    }
  ];

  updateStatus(order: Order, status: string) {
    order.status = status;
  }
}
