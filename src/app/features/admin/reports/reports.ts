import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Report {
  month: string;
  revenue: number;
  orders: number;
}

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports.html',
  styleUrl: './reports.css'
})
export class Reports {

  reports: Report[] = [
    { month: 'January', revenue: 25000, orders: 120 },
    { month: 'February', revenue: 32000, orders: 150 },
    { month: 'March', revenue: 28000, orders: 135 },
    { month: 'April', revenue: 45000, orders: 210 },
    { month: 'May', revenue: 38000, orders: 180 },
    { month: 'June', revenue: 55000, orders: 260 }
  ];

  get totalRevenue(): number {
    return this.reports.reduce((total, item) => total + item.revenue, 0);
  }

  get totalOrders(): number {
    return this.reports.reduce((total, item) => total + item.orders, 0);
  }

  get averageRevenue(): number {
    return this.reports.length
      ? this.totalRevenue / this.reports.length
      : 0;
  }

  getBarWidth(revenue: number): number {
    const max = Math.max(...this.reports.map(item => item.revenue), 1);
    return Math.min(Math.round((revenue / max) * 100), 100);
  }
}
