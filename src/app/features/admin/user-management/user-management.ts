import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'Customer' | 'Seller' | 'Admin';
  status: 'Active' | 'Inactive';
  joinedDate?: string;
}

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-management.html',
  styleUrl: './user-management.css'
})
export class UserManagement {
  // Reactive user repository
  readonly userList = signal<User[]>([
    { id: 1, name: 'Rahul Sharma', email: 'rahul@gmail.com', role: 'Customer', status: 'Active', joinedDate: 'Jan 2026' },
    { id: 2, name: 'Priya Patil', email: 'priya@gmail.com', role: 'Seller', status: 'Active', joinedDate: 'Feb 2026' },
    { id: 3, name: 'Amit Verma', email: 'amit@gmail.com', role: 'Customer', status: 'Inactive', joinedDate: 'Feb 2026' },
    { id: 4, name: 'Sneha Joshi', email: 'sneha@gmail.com', role: 'Seller', status: 'Active', joinedDate: 'Mar 2026' },
    { id: 5, name: 'Karan Mehta', email: 'karan@gmail.com', role: 'Customer', status: 'Active', joinedDate: 'Apr 2026' },
    { id: 6, name: 'Ananya Deshmukh', email: 'ananya@marketplace.com', role: 'Seller', status: 'Active', joinedDate: 'May 2026' }
  ]);

  // Backward compatibility property for existing specs
  get users(): User[] {
    return this.userList();
  }
  set users(val: User[]) {
    this.userList.set(val);
  }

  // Filters
  searchText = '';
  roleFilter = signal<'All' | 'Customer' | 'Seller'>('All');
  statusFilter = signal<'All' | 'Active' | 'Inactive'>('All');

  // Add User Modal State
  isAddModalOpen = false;
  newUser: { name: string; email: string; role: 'Customer' | 'Seller' } = {
    name: '',
    email: '',
    role: 'Customer'
  };

  // Filtered Users computed getter
  get filteredUsers(): User[] {
    const search = this.searchText.toLowerCase().trim();
    const role = this.roleFilter();
    const status = this.statusFilter();

    return this.userList().filter(user => {
      const matchesSearch =
        !search ||
        user.name.toLowerCase().includes(search) ||
        user.email.toLowerCase().includes(search) ||
        user.role.toLowerCase().includes(search);

      const matchesRole = role === 'All' || user.role === role;
      const matchesStatus = status === 'All' || user.status === status;

      return matchesSearch && matchesRole && matchesStatus;
    });
  }

  // Actions
  toggleStatus(user: User): void {
    const updated = this.userList().map(u => {
      if (u.id === user.id) {
        return {
          ...u,
          status: (u.status === 'Active' ? 'Inactive' : 'Active') as 'Active' | 'Inactive'
        };
      }
      return u;
    });
    this.userList.set(updated);
    user.status = user.status === 'Active' ? 'Inactive' : 'Active';
  }

  deleteUser(userId: number): void {
    if (confirm('Are you sure you want to remove this user?')) {
      this.userList.set(this.userList().filter(u => u.id !== userId));
    }
  }

  openAddModal(): void {
    this.newUser = { name: '', email: '', role: 'Customer' };
    this.isAddModalOpen = true;
  }

  closeAddModal(): void {
    this.isAddModalOpen = false;
  }

  saveNewUser(): void {
    if (!this.newUser.name.trim() || !this.newUser.email.trim()) {
      alert('Please fill in both name and email.');
      return;
    }

    const nextId = Math.max(...this.userList().map(u => u.id), 0) + 1;
    const addedUser: User = {
      id: nextId,
      name: this.newUser.name.trim(),
      email: this.newUser.email.trim(),
      role: this.newUser.role,
      status: 'Active',
      joinedDate: 'Just now'
    };

    this.userList.set([addedUser, ...this.userList()]);
    this.closeAddModal();
  }

  // Stats
  get activeUsers(): number {
    return this.userList().filter(user => user.status === 'Active').length;
  }

  get sellerCount(): number {
    return this.userList().filter(user => user.role === 'Seller').length;
  }

  get customerCount(): number {
    return this.userList().filter(user => user.role === 'Customer').length;
  }

  getUserInitials(name: string): string {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  }
}
