import { Injectable, signal, computed } from '@angular/core';

export type UserRole = 'customer' | 'seller' | 'admin';

export interface User {
  id?: string;
  name: string;
  email: string;
  password?: string;
  role: UserRole;
  storeName?: string;
  phone?: string;
  createdAt?: string;
  lastLoginAt?: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user?: User;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly USERS_KEY = 'marketplace_users';
  private readonly CURRENT_USER_KEY = 'currentUser';
  private readonly REMEMBER_KEY = 'marketplace_remember';

  private readonly defaultUsers: User[] = [
    {
      id: 'usr_admin',
      name: 'Marketplace Administrator',
      email: 'admin@gmail.com',
      password: 'admin123',
      role: 'admin',
      createdAt: '2025-01-01T00:00:00.000Z'
    },
    {
      id: 'usr_seller',
      name: 'Prime Vendor',
      email: 'seller@gmail.com',
      password: 'seller123',
      role: 'seller',
      storeName: 'Apex Tech & Gadgets',
      phone: '+1 (555) 234-5678',
      createdAt: '2025-01-10T00:00:00.000Z'
    },
    {
      id: 'usr_customer',
      name: 'Alex Morgan',
      email: 'customer@gmail.com',
      password: 'customer123',
      role: 'customer',
      phone: '+1 (555) 876-5432',
      createdAt: '2025-01-15T00:00:00.000Z'
    }
  ];

  // Reactive state using Angular Signals
  readonly currentUser = signal<User | null>(this.loadStoredUser());
  readonly isLoggedIn = computed(() => this.currentUser() !== null);
  readonly userRole = computed(() => this.currentUser()?.role ?? null);

  constructor() {
    this.initializeUsers();
  }

  private initializeUsers(): void {
    const existing = this.getStoredUsers();
    let updated = false;

    // Strip any existing avatar properties from stored users
    const currentList = existing.map(u => {
      if ((u as { avatar?: string }).avatar) {
        updated = true;
        const copy = { ...u };
        delete (copy as { avatar?: string }).avatar;
        return copy;
      }
      return u;
    });

    for (const defUser of this.defaultUsers) {
      const found = currentList.some(u => u.email.toLowerCase() === defUser.email.toLowerCase());
      if (!found) {
        currentList.push(defUser);
        updated = true;
      }
    }

    if (updated || existing.length === 0) {
      this.saveUsers(currentList);
    }

    // Also strip avatar from cached currentUser if present
    const current = this.loadStoredUser();
    if (current && (current as { avatar?: string }).avatar) {
      const copy = { ...current };
      delete (copy as { avatar?: string }).avatar;
      localStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify(copy));
      this.currentUser.set(copy);
    }
  }

  private getStoredUsers(): User[] {
    try {
      const data = localStorage.getItem(this.USERS_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  private saveUsers(users: User[]): void {
    try {
      localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
    } catch (e) {
      console.error('Failed to save users to localStorage', e);
    }
  }

  private loadStoredUser(): User | null {
    try {
      const userJson = localStorage.getItem(this.CURRENT_USER_KEY) || sessionStorage.getItem(this.CURRENT_USER_KEY);
      return userJson ? JSON.parse(userJson) : null;
    } catch {
      return null;
    }
  }

  getUsers(): User[] {
    return this.getStoredUsers();
  }

  register(newUser: Omit<User, 'id' | 'createdAt'>): boolean {
    const users = this.getStoredUsers();
    const normalizedEmail = newUser.email.trim().toLowerCase();

    const exists = users.some(u => u.email.toLowerCase() === normalizedEmail);
    if (exists) {
      return false;
    }

    const createdUser: User = {
      ...newUser,
      id: `usr_${Date.now()}`,
      email: normalizedEmail,
      createdAt: new Date().toISOString()
    };

    users.push(createdUser);
    this.saveUsers(users);
    return true;
  }

  login(email: string, password: string, rememberMe: boolean = true): boolean {
    const users = this.getStoredUsers();
    const normalizedEmail = email.trim().toLowerCase();

    const user = users.find(
      u => u.email.toLowerCase() === normalizedEmail && u.password === password
    );

    if (!user) {
      return false;
    }

    const updatedUser: User = {
      ...user,
      lastLoginAt: new Date().toISOString()
    };

    // Update in users list
    const index = users.findIndex(u => u.email.toLowerCase() === normalizedEmail);
    if (index !== -1) {
      users[index] = updatedUser;
      this.saveUsers(users);
    }

    // Persist current session
    const userString = JSON.stringify(updatedUser);
    if (rememberMe) {
      localStorage.setItem(this.CURRENT_USER_KEY, userString);
      localStorage.setItem(this.REMEMBER_KEY, 'true');
    } else {
      sessionStorage.setItem(this.CURRENT_USER_KEY, userString);
      localStorage.removeItem(this.CURRENT_USER_KEY);
      localStorage.removeItem(this.REMEMBER_KEY);
    }

    this.currentUser.set(updatedUser);
    return true;
  }

  logout(): void {
    localStorage.removeItem(this.CURRENT_USER_KEY);
    sessionStorage.removeItem(this.CURRENT_USER_KEY);
    localStorage.removeItem(this.REMEMBER_KEY);
    this.currentUser.set(null);
  }

  getCurrentUser(): User | null {
    return this.currentUser();
  }

  hasRole(role: UserRole): boolean {
    return this.currentUser()?.role === role;
  }

  updateProfile(updatedData: Partial<User> & { email?: string }): boolean {
    const current = this.currentUser();
    if (!current) {
      return false;
    }

    const users = this.getStoredUsers();
    const index = users.findIndex(u => u.email.toLowerCase() === current.email.toLowerCase());

    if (index === -1) {
      return false;
    }

    const updatedUser: User = {
      ...users[index],
      ...updatedData,
      email: current.email // preserve email for primary identity
    };

    users[index] = updatedUser;
    this.saveUsers(users);

    const userString = JSON.stringify(updatedUser);
    if (localStorage.getItem(this.CURRENT_USER_KEY)) {
      localStorage.setItem(this.CURRENT_USER_KEY, userString);
    }
    if (sessionStorage.getItem(this.CURRENT_USER_KEY)) {
      sessionStorage.setItem(this.CURRENT_USER_KEY, userString);
    }

    this.currentUser.set(updatedUser);
    return true;
  }

  changePassword(oldPassword: string, newPassword: string): boolean {
    const current = this.currentUser();
    if (!current || current.password !== oldPassword) {
      return false;
    }

    return this.updateProfile({ password: newPassword });
  }

  resetDemoAccounts(): void {
    this.saveUsers(this.defaultUsers);
  }
}
