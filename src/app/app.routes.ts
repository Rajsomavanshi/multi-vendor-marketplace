import { Routes } from '@angular/router';

import { Auth } from './features/auth/auth';
import { Register } from './features/auth/register/register';
import { Login } from './features/auth/login/login';
import { Profile } from './features/auth/profile/profile';
import { authGuard } from './guards/auth-guard';

import { Admin } from './features/admin/admin';
import { Cart } from './features/cart/cart';
import { Checkout } from './features/cart/checkout/checkout';
import { OrderConfirmation } from './features/cart/order-confirmation/order-confirmation';
import { OrderHistory } from './features/cart/order-history/order-history';
import { Wishlist } from './features/cart/wishlist/wishlist';

import { Products } from './features/products/products';
import { Seller } from './features/seller/seller';

export const routes: Routes = [
  // Default route
  { path: '', redirectTo: 'products', pathMatch: 'full' },

  // Authentication
  { path: 'auth', component: Auth },
  { path: 'login', component: Login },
  { path: 'register', component: Register },

  // User profile
  { path: 'profile', component: Profile, canActivate: [authGuard] },
  {
    path: 'customer',
    component: Profile,
    canActivate: [authGuard],
    data: { role: 'customer' }
  },

  // Products
  { path: 'products', component: Products },
  { path: 'products/:id', component: Products },

  // Cart and orders
  { path: 'cart', component: Cart },
  { path: 'wishlist', component: Wishlist },
  { path: 'checkout', component: Checkout },
  { path: 'order-confirmation/:id', component: OrderConfirmation },
  { path: 'order-confirmation', component: OrderConfirmation },
  { path: 'orders', component: OrderHistory },

  // Seller and Admin dashboards
  {
    path: 'seller',
    component: Seller,
    canActivate: [authGuard],
    data: { role: 'seller' }
  },
  {
    path: 'admin',
    component: Admin,
    canActivate: [authGuard],
    data: { role: 'admin' }
  },

  // Unknown routes
  { path: '**', redirectTo: 'products' }
];