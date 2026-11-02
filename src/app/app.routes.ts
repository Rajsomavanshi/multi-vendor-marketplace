import { Routes } from '@angular/router';

import { Auth } from './features/auth/auth';
import { Register } from './features/auth/register/register';
import { Login } from './features/auth/login/login';
import { Profile } from './features/auth/profile/profile';

import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: Auth
  },
  {
    path: 'register',
    component: Register
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'profile',
    component: Profile,
    canActivate: [authGuard]
  },
  {
    path: 'customer',
    component: Profile,
    canActivate: [authGuard],
    data: { role: 'customer' }
  },
  {
    path: 'seller',
    component: Profile,
    canActivate: [authGuard],
    data: { role: 'seller' }
  },
  {
    path: 'admin',
    component: Profile,
    canActivate: [authGuard],
    data: { role: 'admin' }
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
