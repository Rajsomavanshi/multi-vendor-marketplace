import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Reports } from './reports/reports';
import { UserManagement } from './user-management/user-management';
import { OrderManagement } from './order-management/order-management';
import { Dashboard } from './dashboard/dashboard';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    Reports,
    UserManagement,
    OrderManagement,
    Dashboard
  ],
  styleUrl: './admin.css',
  templateUrl: './admin.html',
})
export class Admin {
  readonly activeTab = signal<'reports' | 'users' | 'orders' | 'dashboard' | 'overview'>('reports');

  setTab(tab: 'reports' | 'users' | 'orders' | 'dashboard' | 'overview'): void {
    this.activeTab.set(tab);
  }
}
