
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
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  stats = [
    { title: 'Total Revenue', value: '₹2,45,000', icon: '₹', change: '+12.5%' },
    { title: 'Total Orders', value: '1,250', icon: '📦', change: '+8.2%' },
    { title: 'Total Customers', value: '850', icon: '👥', change: '+15.3%' },
    { title: 'Total Products', value: '320', icon: '🛍️', change: '+5.4%' }
  ];

  orders: Order[] = [
    { id: '#ORD001', customer: 'Rahul Sharma', product: 'Wireless Headphones', amount: 2499, status: 'Delivered' },
    { id: '#ORD002', customer: 'Priya Patil', product: 'Smart Watch', amount: 3999, status: 'Pending' },
    { id: '#ORD003', customer: 'Amit Verma', product: 'Laptop Bag', amount: 1299, status: 'Shipped' },
    { id: '#ORD004', customer: 'Sneha Joshi', product: 'Bluetooth Speaker', amount: 1999, status: 'Cancelled' }
  ];
}
