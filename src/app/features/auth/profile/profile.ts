import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, User, UserRole } from '../../../services/auth';
import { DatePipe, NgClass } from '@angular/common';

function newPasswordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const newPass = control.get('newPassword');
  const confirmPass = control.get('confirmNewPassword');

  if (newPass && confirmPass && newPass.value !== confirmPass.value) {
    confirmPass.setErrors({ mismatch: true });
    return { mismatch: true };
  }
  return null;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe, NgClass],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnInit {
  private fb = inject(FormBuilder);
  public auth = inject(AuthService);
  private router = inject(Router);

  user: User | null = null;
  activeTab: 'overview' | 'edit' | 'security' = 'overview';

  profileMessage = '';
  profileMessageType: 'success' | 'error' | '' = '';
  isSavingProfile = false;

  securityMessage = '';
  securityMessageType: 'success' | 'error' | '' = '';
  isSavingSecurity = false;

  showCurrentPassword = false;
  showNewPassword = false;

  profileForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: [{ value: '', disabled: true }],
    phone: [''],
    storeName: ['']
  });

  securityForm = this.fb.group(
    {
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmNewPassword: ['', Validators.required]
    },
    { validators: newPasswordMatchValidator }
  );

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData(): void {
    this.user = this.auth.getCurrentUser();

    if (!this.user) {
      this.router.navigate(['/login']);
      return;
    }

    this.profileForm.patchValue({
      name: this.user.name,
      email: this.user.email,
      phone: this.user.phone || '',
      storeName: this.user.storeName || ''
    });
  }

  setTab(tab: 'overview' | 'edit' | 'security'): void {
    this.activeTab = tab;
    this.profileMessage = '';
    this.securityMessage = '';
  }

  updateProfile(): void {
    if (this.profileForm.invalid || !this.user) {
      this.profileForm.markAllAsTouched();
      return;
    }

    this.isSavingProfile = true;
    this.profileMessage = '';

    const raw = this.profileForm.getRawValue();

    setTimeout(() => {
      const success = this.auth.updateProfile({
        name: raw.name!.trim(),
        phone: raw.phone?.trim(),
        storeName: this.user?.role === 'seller' ? raw.storeName?.trim() : undefined
      });

      this.isSavingProfile = false;

      if (success) {
        this.user = this.auth.getCurrentUser();
        this.profileMessageType = 'success';
        this.profileMessage = 'Profile updated successfully!';
        setTimeout(() => (this.profileMessage = ''), 3000);
      } else {
        this.profileMessageType = 'error';
        this.profileMessage = 'Failed to update profile. Please try again.';
      }
    }, 350);
  }

  changePassword(): void {
    if (this.securityForm.invalid || !this.user) {
      this.securityForm.markAllAsTouched();
      return;
    }

    this.isSavingSecurity = true;
    this.securityMessage = '';

    const currentPass = this.securityForm.value.currentPassword!;
    const newPass = this.securityForm.value.newPassword!;

    setTimeout(() => {
      const success = this.auth.changePassword(currentPass, newPass);
      this.isSavingSecurity = false;

      if (success) {
        this.securityMessageType = 'success';
        this.securityMessage = 'Password changed successfully!';
        this.securityForm.reset();
        setTimeout(() => (this.securityMessage = ''), 3500);
      } else {
        this.securityMessageType = 'error';
        this.securityMessage = 'Current password is incorrect. Please verify and retry.';
      }
    }, 400);
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
