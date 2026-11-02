import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService, UserRole } from '../services/auth';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  const user = auth.getCurrentUser();
  const requiredRole = route.data['role'] as UserRole | undefined;

  if (!user) {
    router.navigate(['/login'], {
      queryParams: { returnUrl: state?.url || '/profile' }
    });
    return false;
  }

  // Admin has overarching access to all routes
  if (user.role === 'admin') {
    return true;
  }

  // Check role-specific access
  if (requiredRole && user.role !== requiredRole) {
    // Redirect to the user's appropriate workspace
    if (user.role === 'seller') {
      router.navigate(['/seller']);
    } else if (user.role === 'customer') {
      router.navigate(['/customer']);
    } else {
      router.navigate(['/profile']);
    }
    return false;
  }

  return true;
};
