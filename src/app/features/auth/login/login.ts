import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService, UserRole } from '../../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  message = '';
  messageType: 'success' | 'error' | '' = '';
  isSubmitting = false;
  showPassword = false;
  returnUrl = '';

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    rememberMe: [true]
  });

  ngOnInit(): void {
    // If already logged in, redirect directly to their dashboard
    if (this.auth.isLoggedIn()) {
      const user = this.auth.getCurrentUser();
      this.redirectUser(user?.role);
      return;
    }

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  fillDemo(role: 'admin' | 'seller' | 'customer'): void {
    const creds = {
      admin: { email: 'admin@gmail.com', pass: 'admin123' },
      seller: { email: 'seller@gmail.com', pass: 'seller123' },
      customer: { email: 'customer@gmail.com', pass: 'customer123' }
    }[role];

    this.loginForm.patchValue({
      email: creds.email,
      password: creds.pass
    });

    this.message = `Loaded ${role.toUpperCase()} credentials! Click "Sign In" below.`;
    this.messageType = 'success';
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.message = '';

    const email = this.loginForm.value.email!.trim();
    const password = this.loginForm.value.password!;
    const rememberMe = !!this.loginForm.value.rememberMe;

    setTimeout(() => {
      const success = this.auth.login(email, password, rememberMe);
      this.isSubmitting = false;

      if (success) {
        this.messageType = 'success';
        this.message = 'Welcome back! Redirecting to dashboard...';

        const user = this.auth.getCurrentUser();
        setTimeout(() => {
          if (this.returnUrl) {
            this.router.navigateByUrl(this.returnUrl);
          } else {
            this.redirectUser(user?.role);
          }
        }, 500);
      } else {
        this.messageType = 'error';
        this.message = 'Invalid email or password. Please try again.';
      }
    }, 350);
  }

  private redirectUser(role?: UserRole): void {
    if (role === 'admin') {
      this.router.navigate(['/admin']);
    } else if (role === 'seller') {
      this.router.navigate(['/seller']);
    } else {
      this.router.navigate(['/profile']);
    }
  }
}
