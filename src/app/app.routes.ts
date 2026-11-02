import { Routes } from '@angular/router';

import { Admin } from './features/admin/admin';
import { Auth } from './features/auth/auth';

import { Cart } from './features/cart/cart';
import { Checkout } from './features/cart/checkout/checkout';
import { OrderConfirmation } from './features/cart/order-confirmation/order-confirmation';
import { OrderHistory } from './features/cart/order-history/order-history';
import { Wishlist } from './features/cart/wishlist/wishlist';

import { Products } from './features/products/products';
import { Seller } from './features/seller/seller';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },

  // Products
  { path: 'products', component: Products },
  { path: 'products/:id', component: Products },

  // Cart module
  { path: 'cart', component: Cart },
  { path: 'wishlist', component: Wishlist },
  { path: 'checkout', component: Checkout },
  { path: 'order-confirmation/:id', component: OrderConfirmation },
  { path: 'order-confirmation', component: OrderConfirmation },
  { path: 'orders', component: OrderHistory },

  // Other modules
  { path: 'auth', component: Auth },
  { path: 'seller', component: Seller },
  { path: 'admin', component: Admin },

  { path: '**', redirectTo: 'products' }
];