import { Routes } from '@angular/router';
import { Products } from './features/products/products';
import { Auth } from './features/auth/auth';
import { Cart } from './features/cart/cart';
import { Seller } from './features/seller/seller';
import { Admin } from './features/admin/admin';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: Products },
  { path: 'products/:id', component: Products },
  { path: 'auth', component: Auth },
  { path: 'cart', component: Cart },
  { path: 'seller', component: Seller },
  { path: 'admin', component: Admin },
  { path: '**', redirectTo: 'products' },
];
