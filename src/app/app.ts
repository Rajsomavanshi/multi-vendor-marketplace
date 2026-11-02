import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Reports } from './features/admin/reports/reports';
import { UserManagement } from './features/admin/user-management/user-management';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Reports, UserManagement],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Navigation tab state - default to 'reports'
  readonly activeTab = signal<'reports' | 'users'>('reports');

  setTab(tab: 'reports' | 'users'): void {
    this.activeTab.set(tab);
  }
}
