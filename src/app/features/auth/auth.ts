import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgClass } from '@angular/common';
import { AuthService, UserRole } from '../../services/auth';

export type { User, UserRole } from '../../services/auth';

function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (password && confirmPassword && password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ passwordMismatch: true });
    return { passwordMismatch: true };
  }

  return null;
}

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './auth.html',
  styleUrl: './auth.css'
})
export class Auth implements OnInit {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  activeTab: 'login' | 'register' = 'login';
  showLoginPassword = false;
  showRegisterPassword = false;
  showConfirmPassword = false;

  loginMessage = '';
  loginMessageType: 'success' | 'error' | '' = '';
  isLoginSubmitting = false;

  registerMessage = '';
  registerMessageType: 'success' | 'error' | '' = '';
  isRegisterSubmitting = false;

  returnUrl = '/profile';

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    rememberMe: [true]
  });

  registerForm = this.fb.group(
    {
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      role: ['customer' as UserRole, Validators.required],
      storeName: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      agreeTerms: [true, Validators.requiredTrue]
    },
    { validators: passwordMatchValidator }
  );

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      const user = this.auth.getCurrentUser();

      if (user?.role === 'admin') {
        this.router.navigate(['/admin']);
      } else if (user?.role === 'seller') {
        this.router.navigate(['/seller']);
      } else {
        this.router.navigate(['/profile']);
      }

      return;
    }

    this.route.queryParams.subscribe(params => {
      if (params['mode'] === 'register') {
        this.activeTab = 'register';
      } else if (params['mode'] === 'login') {
        this.activeTab = 'login';
      }

      if (params['returnUrl']) {
        this.returnUrl = params['returnUrl'];
      }
    });
  }

  setTab(tab: 'login' | 'register'): void {
    this.activeTab = tab;
    this.loginMessage = '';
    this.registerMessage = '';
  }

  fillDemo(role: 'admin' | 'seller' | 'customer'): void {
    this.activeTab = 'login';

    const credentials = {
      admin: { email: 'admin@gmail.com', pass: 'admin123' },
      seller: { email: 'seller@gmail.com', pass: 'seller123' },
      customer: { email: 'customer@gmail.com', pass: 'customer123' }
    }[role];

    this.loginForm.patchValue({
      email: credentials.email,
      password: credentials.pass
    });

    this.loginMessage = `Loaded ${role.toUpperCase()} credentials. Click Sign In!`;
    this.loginMessageType = 'success';
  }

  toggleLoginPassword(): void {
    this.showLoginPassword = !this.showLoginPassword;
  }

  toggleRegisterPassword(): void {
    this.showRegisterPassword = !this.showRegisterPassword;
  }

  toggleConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  getPasswordStrength(): { score: number; label: string; colorClass: string } {
    const password = this.registerForm.get('password')?.value || '';

    if (!password) {
      return { score: 0, label: 'None', colorClass: 'strength-none' };
    }

    let score = 0;

    if (password.length >= 6) score++;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password) || /[^A-Za-z0-9]/.test(password)) score++;

    switch (score) {
      case 1:
        return { score: 25, label: 'Weak', colorClass: 'strength-weak' };
      case 2:
        return { score: 50, label: 'Fair', colorClass: 'strength-fair' };
      case 3:
        return { score: 75, label: 'Good', colorClass: 'strength-good' };
      case 4:
      default:
        return { score: 100, label: 'Strong', colorClass: 'strength-strong' };
    }
  }

  onLoginSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoginSubmitting = true;
    this.loginMessage = '';

    const email = this.loginForm.value.email!.trim();
    const password = this.loginForm.value.password!;
    const rememberMe = !!this.loginForm.value.rememberMe;

    setTimeout(() => {
      const success = this.auth.login(email, password, rememberMe);
      this.isLoginSubmitting = false;

      if (success) {
        this.loginMessageType = 'success';
        this.loginMessage = 'Authentication successful! Redirecting...';

        const user = this.auth.getCurrentUser();
        let targetRoute =
          this.returnUrl && this.returnUrl !== '/login'
            ? this.returnUrl
            : '/profile';

        if (targetRoute === '/profile' && user) {
          if (user.role === 'admin') {
            targetRoute = '/admin';
          } else if (user.role === 'seller') {
            targetRoute = '/seller';
          } else {
            targetRoute = '/customer';
          }
        }

        setTimeout(() => {
          this.router.navigateByUrl(targetRoute);
        }, 600);
      } else {
        this.loginMessageType = 'error';
        this.loginMessage =
          'Invalid email or password. Please verify your credentials.';
      }
    }, 400);
  }

  onRegisterSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.isRegisterSubmitting = true;
    this.registerMessage = '';

    const raw = this.registerForm.getRawValue();

    setTimeout(() => {
      const success = this.auth.register({
        name: raw.name!.trim(),
        email: raw.email!.trim(),
        password: raw.password!,
        role: raw.role!,
        storeName: raw.role === 'seller' ? raw.storeName?.trim() : undefined
      });

      this.isRegisterSubmitting = false;

      if (success) {
        this.registerMessageType = 'success';
        this.registerMessage =
          'Account created successfully! Switching to sign in...';

        setTimeout(() => {
          this.activeTab = 'login';

          this.loginForm.patchValue({
            email: raw.email!.trim(),
            password: raw.password!
          });

          this.loginMessage =
            'Account ready. Click Sign In to access your dashboard!';
          this.loginMessageType = 'success';
        }, 1200);
      } else {
        this.registerMessageType = 'error';
        this.registerMessage =
          'This email address is already registered. Please sign in or use another email.';
      }
    }, 500);
  }
}