import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-management.html',
  styleUrl: './user-management.css'
})
export class UserManagement {

  users: User[] = [
    { id: 1, name: 'Rahul Sharma', email: 'rahul@gmail.com', role: 'Customer', status: 'Active' },
    { id: 2, name: 'Priya Patil', email: 'priya@gmail.com', role: 'Seller', status: 'Active' },
    { id: 3, name: 'Amit Verma', email: 'amit@gmail.com', role: 'Customer', status: 'Inactive' },
    { id: 4, name: 'Sneha Joshi', email: 'sneha@gmail.com', role: 'Seller', status: 'Active' },
    { id: 5, name: 'Karan Mehta', email: 'karan@gmail.com', role: 'Customer', status: 'Active' }
  ];

  searchText = '';

  get filteredUsers(): User[] {
    const search = this.searchText.toLowerCase().trim();

    return this.users.filter(user =>
      user.name.toLowerCase().includes(search) ||
      user.email.toLowerCase().includes(search) ||
      user.role.toLowerCase().includes(search)
    );
  }

  toggleStatus(user: User): void {
    user.status = user.status === 'Active' ? 'Inactive' : 'Active';
  }

  get activeUsers(): number {
    return this.users.filter(user => user.status === 'Active').length;
  }

  get sellerCount(): number {
    return this.users.filter(user => user.role === 'Seller').length;
  }
}
