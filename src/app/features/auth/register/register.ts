import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService, UserRole } from '../../../services/auth';
import { NgClass } from '@angular/common';

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
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, NgClass],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);

  message = '';
  messageType: 'success' | 'error' | '' = '';
  isSubmitting = false;
  showPassword = false;
  showConfirmPassword = false;

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

  togglePassword(): void {
    this.showPassword = !this.showPassword;
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

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.message = '';

    const raw = this.registerForm.getRawValue();

    setTimeout(() => {
      const success = this.auth.register({
        name: raw.name!.trim(),
        email: raw.email!.trim(),
        password: raw.password!,
        role: raw.role!,
        storeName: raw.role === 'seller' ? raw.storeName?.trim() : undefined
      });

      this.isSubmitting = false;

      if (success) {
        this.messageType = 'success';
        this.message = 'Registration successful! Redirecting to login...';
        setTimeout(() => this.router.navigate(['/login']), 1200);
      } else {
        this.messageType = 'error';
        this.message = 'This email is already registered. Please login instead.';
      }
    }, 400);
  }
}
