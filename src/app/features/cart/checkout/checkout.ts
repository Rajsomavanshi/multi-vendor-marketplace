import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ShippingAddress, ShippingOption } from '../../../core/models/marketplace.models';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {
  readonly cartService = inject(CartService);
  private readonly router = inject(Router);

  // Active step: 1 = Shipping, 2 = Delivery Speed, 3 = Payment
  currentStep = signal<number>(1);
  isSubmitting = signal<boolean>(false);
  errorMessage = signal<string | null>(null);

  // Form Model
  address: ShippingAddress = {
    fullName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'India',
    addressType: 'Home',
  };

  selectedPaymentMethod = signal<'Credit / Debit Card' | 'UPI / NetBanking' | 'Cash on Delivery'>('Credit / Debit Card');

  // Mock Payment Fields
  cardDetails = {
    cardNumber: '',
    cardHolder: '',
    expiry: '',
    cvv: '',
  };

  upiId = '';

  constructor() {
    // If cart is empty, redirect user back to cart
    if (this.cartService.cartItems().length === 0) {
      setTimeout(() => {
        this.router.navigate(['/cart']);
      }, 50);
    }
  }

  fillDemoAddress(): void {
    this.address = {
      fullName: 'Rahul Sharma',
      email: 'rahul.sharma@example.com',
      phone: '+91 98765 43210',
      street: 'Flat 402, Green Valley Apartments, MG Road',
      city: 'Bengaluru',
      state: 'Karnataka',
      zipCode: '560001',
      country: 'India',
      addressType: 'Home',
    };
    this.errorMessage.set(null);
  }

  fillDemoCard(): void {
    this.cardDetails = {
      cardNumber: '4532 •••• •••• 8821',
      cardHolder: 'RAHUL SHARMA',
      expiry: '12/28',
      cvv: '821',
    };
  }

  setStep(step: number): void {
    if (step > 1 && !this.validateAddress()) {
      this.errorMessage.set('Please fill out all required shipping address fields before proceeding.');
      return;
    }
    this.errorMessage.set(null);
    this.currentStep.set(step);
  }

  validateAddress(): boolean {
    return !!(
      this.address.fullName.trim() &&
      this.address.email.trim() &&
      this.address.phone.trim() &&
      this.address.street.trim() &&
      this.address.city.trim() &&
      this.address.state.trim() &&
      this.address.zipCode.trim()
    );
  }

  onSelectShipping(option: ShippingOption): void {
    this.cartService.setShippingOption(option);
  }

  onSubmitOrder(): void {
    this.errorMessage.set(null);

    if (!this.validateAddress()) {
      this.currentStep.set(1);
      this.errorMessage.set('Please complete all required shipping address fields.');
      return;
    }

    if (this.selectedPaymentMethod() === 'Credit / Debit Card') {
      if (!this.cardDetails.cardNumber.trim()) {
        this.fillDemoCard(); // auto-populate mock for convenience
      }
    }

    this.isSubmitting.set(true);

    // Simulate mock checkout gateway processing delay
    setTimeout(() => {
      try {
        const order = this.cartService.createOrder(this.address, this.selectedPaymentMethod());
        this.isSubmitting.set(false);
        this.router.navigate(['/order-confirmation', order.id]);
      } catch (err) {
        this.isSubmitting.set(false);
        this.errorMessage.set('Failed to place order. Please try again.');
      }
    }, 1200);
  }
}

