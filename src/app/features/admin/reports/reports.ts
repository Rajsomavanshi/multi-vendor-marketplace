import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface MonthlyReport {
  month: string;
  revenue: number;
  orders: number;
  target: number;
}

// Backward-compatible alias
export type Report = MonthlyReport;

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reports.html',
  styleUrl: './reports.css'
})
export class Reports {
  // Underlying monthly records
  readonly rawReports = signal<MonthlyReport[]>([
    { month: 'January', revenue: 25000, orders: 120, target: 24000 },
    { month: 'February', revenue: 32000, orders: 150, target: 30000 },
    { month: 'March', revenue: 28000, orders: 135, target: 32000 },
    { month: 'April', revenue: 45000, orders: 210, target: 40000 },
    { month: 'May', revenue: 38000, orders: 180, target: 42000 },
    { month: 'June', revenue: 55000, orders: 260, target: 50000 }
  ]);

  // Reactive state filters
  readonly selectedPeriod = signal<string>('all');
  readonly selectedMetric = signal<'revenue' | 'orders'>('revenue');
  readonly searchQuery = signal<string>('');
  readonly sortField = signal<'month' | 'revenue' | 'orders' | 'aov'>('month');
  readonly sortOrder = signal<'asc' | 'desc'>('asc');

  get searchQueryValue(): string {
    return this.searchQuery();
  }
  set searchQueryValue(val: string) {
    this.searchQuery.set(val);
  }

  // Reactive computed reports list
  readonly filteredReports = computed(() => {
    let list = [...this.rawReports()];
    const period = this.selectedPeriod();
    const query = this.searchQuery().toLowerCase().trim();

    // Period filtering
    if (period === 'q1') {
      list = list.filter(r => ['January', 'February', 'March'].includes(r.month));
    } else if (period === 'q2') {
      list = list.filter(r => ['April', 'May', 'June'].includes(r.month));
    }

    // Search query filter
    if (query) {
      list = list.filter(r => r.month.toLowerCase().includes(query));
    }

    // Sorting
    const field = this.sortField();
    const order = this.sortOrder();
    const monthOrder = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    list.sort((a, b) => {
      let comparison = 0;
      if (field === 'month') {
        comparison = monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month);
      } else if (field === 'revenue') {
        comparison = a.revenue - b.revenue;
      } else if (field === 'orders') {
        comparison = a.orders - b.orders;
      } else if (field === 'aov') {
        const aovA = a.orders ? a.revenue / a.orders : 0;
        const aovB = b.orders ? b.revenue / b.orders : 0;
        comparison = aovA - aovB;
      }
      return order === 'asc' ? comparison : -comparison;
    });

    return list;
  });

  // Getter for template & backwards-compatibility
  get reports(): MonthlyReport[] {
    return this.filteredReports();
  }

  // Summary KPI Calculations
  get totalRevenue(): number {
    return this.filteredReports().reduce((sum, item) => sum + item.revenue, 0);
  }

  get totalOrders(): number {
    return this.filteredReports().reduce((sum, item) => sum + item.orders, 0);
  }

  get averageRevenue(): number {
    const list = this.filteredReports();
    return list.length ? this.totalRevenue / list.length : 0;
  }

  get averageOrderValue(): number {
    return this.totalOrders > 0 ? this.totalRevenue / this.totalOrders : 0;
  }

  get bestMonth(): MonthlyReport | null {
    const list = this.filteredReports();
    if (!list.length) return null;
    return list.reduce((best, curr) => curr.revenue > best.revenue ? curr : best, list[0]);
  }

  get targetAchievementRate(): number {
    const totalTarget = this.filteredReports().reduce((sum, item) => sum + item.target, 0);
    return totalTarget > 0 ? Math.round((this.totalRevenue / totalTarget) * 100) : 100;
  }

  // Bar width calculation with safeguard against 0 division
  getBarWidth(revenueOrOrders: number): number {
    const list = this.filteredReports();
    if (!list.length) return 0;

    const metric = this.selectedMetric();
    const maxVal = metric === 'revenue'
      ? Math.max(...list.map(i => i.revenue), 1)
      : Math.max(...list.map(i => i.orders), 1);

    return Math.min(Math.round((revenueOrOrders / maxVal) * 100), 100);
  }

  // MoM Growth Rate
  getGrowthRate(index: number): { value: number; isPositive: boolean } | null {
    const list = this.filteredReports();
    if (index === 0 || !list[index - 1]) return null;
    const prev = list[index - 1].revenue;
    const curr = list[index].revenue;
    if (prev === 0) return null;
    const growth = Math.round(((curr - prev) / prev) * 100);
    return { value: Math.abs(growth), isPositive: growth >= 0 };
  }

  // Sort toggle handler
  toggleSort(field: 'month' | 'revenue' | 'orders' | 'aov') {
    if (this.sortField() === field) {
      this.sortOrder.set(this.sortOrder() === 'asc' ? 'desc' : 'asc');
    } else {
      this.sortField.set(field);
      this.sortOrder.set('desc');
    }
  }

  // Metric filter
  setMetric(metric: 'revenue' | 'orders') {
    this.selectedMetric.set(metric);
  }

  // Period filter
  setPeriod(period: string) {
    this.selectedPeriod.set(period);
  }

  // Export report to CSV
  exportToCsv() {
    const list = this.filteredReports();
    const headers = ['Month', 'Revenue (INR)', 'Orders', 'Avg Order Value (INR)', 'Target (INR)', 'Achievement (%)'];
    const rows = list.map(r => {
      const aov = r.orders ? (r.revenue / r.orders).toFixed(0) : '0';
      const achievement = r.target ? Math.round((r.revenue / r.target) * 100) : 100;
      return [r.month, r.revenue, r.orders, aov, r.target, `${achievement}%`];
    });

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `marketplace-sales-report-${this.selectedPeriod()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}
