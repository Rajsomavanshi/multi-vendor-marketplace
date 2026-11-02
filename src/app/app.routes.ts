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
  { path: 'products', component: Products, title: 'ShopNest — Product Catalogue' },
  { path: 'cart', component: Cart, title: 'ShopNest — Shopping Cart' },
  { path: 'wishlist', component: Wishlist, title: 'ShopNest — Wishlist' },
  { path: 'checkout', component: Checkout, title: 'ShopNest — Checkout' },
  { path: 'order-confirmation/:id', component: OrderConfirmation, title: 'ShopNest — Order Confirmed' },
  { path: 'order-confirmation', component: OrderConfirmation, title: 'ShopNest — Order Confirmed' },
  { path: 'orders', component: OrderHistory, title: 'ShopNest — My Orders' },
  { path: 'auth', component: Auth, title: 'ShopNest — User Authentication (Student 1)' },
  { path: 'seller', component: Seller, title: 'ShopNest — Seller Dashboard (Student 4)' },
  { path: 'admin', component: Admin, title: 'ShopNest — Admin Dashboard (Student 5)' },
  { path: '**', redirectTo: 'products' },
];
