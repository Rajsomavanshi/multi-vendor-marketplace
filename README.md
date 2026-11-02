# Multi-Vendor E-Commerce Marketplace (Group 1)

A complete Angular application developed collaboratively for the **Angular Main Project Allocation**.

---

## 🎯 Student 3 Module: Cart, Wishlist & Checkout

As allocated in **Group 1**, Student 3 is responsible for:
1. **Add products to cart and wishlist; support quantity changes and removal**
2. **Calculate subtotal, delivery charges, and total**
3. **Create a checkout and order-confirmation flow using mock data**

---

### ✨ Features Implemented for Student 3

#### 1. Cart & Wishlist Management (`CartService`, `Cart`, `Wishlist`)
- **Add to Cart & Wishlist**: Seamlessly add any product to cart or wishlist from the catalogue, cart, or demo seed.
- **Quantity Controls**: Real-time increment (`+`), decrement (`-`), and direct numerical quantity changes with stock limit enforcement (`stockCount`).
- **Item Removal**: Remove single items with toast notifications, or clear the entire cart.
- **Wishlist Operations**:
  - Save favorite items from multiple sellers.
  - "Move to Cart" (transfers product to cart and removes from wishlist).
  - "Move All to Cart" for bulk addition.
  - "Move to Wishlist" directly from the shopping cart.
- **Multi-Vendor Grouping**: Products in cart display which verified seller they belong to (e.g., *Apex Electronics*, *Nordic Living Co.*, *Urban Craft Leather*).
- **Persistent Storage**: Saved to `localStorage` (`mvm_cart_items_v1`, `mvm_wishlist_items_v1`, `mvm_orders_v1`) so state survives page refreshes.

#### 2. Pricing & Delivery Calculations
- **Item & Cart Subtotal**: Computed dynamically from item price × quantity.
- **Delivery Charges & Options**:
  - **Standard Delivery**: ₹99 (Free on orders ₹999+).
  - **Express Delivery**: ₹199 (2-3 business days).
  - **Same-Day / Priority**: ₹299 (Guaranteed next business day).
- **Free Delivery Progress Bar**: Visual meter showing how much more to add to qualify for free standard delivery (₹999 threshold).
- **Discount & Promo Codes**:
  - `WELCOME10`: 10% discount on orders above ₹500.
  - `FLAT200`: Flat ₹200 off on orders above ₹1,500.
  - `FREESHIP`: 100% Free standard delivery on orders above ₹300.
- **Estimated Tax**: 5% GST calculated on the discounted taxable amount.
- **Grand Total**: `Subtotal - Discount + Delivery Charge + Tax`.

#### 3. Checkout & Order Confirmation Flow
- **Multi-Step Checkout Stepper**:
  - **Step 1: Shipping Address**: Form with validation for Full Name, Email, Phone, Address, City, State, PIN code, and Address Type. Includes a **⚡ Auto-Fill Demo Address** button for fast testing.
  - **Step 2: Delivery Speed Selection**: Switch between Standard, Express, or Overnight delivery with live cost updates.
  - **Step 3: Payment Method**:
    - Credit / Debit Card (with Auto-fill Test Card button).
    - UPI / Net Banking (GPay, PhonePe, Paytm virtual payment address).
    - Cash on Delivery (COD).
  - **Sticky Order Review**: Real-time summary showing line items, sellers, delivery cost, and grand total.
- **Order Confirmation Receipt**:
  - Celebratory confirmation screen with generated unique Order ID (e.g. `ORD-2026-XXXXX`).
  - Estimated delivery date calculation.
  - Visual 4-stage Fulfillment Tracker (Order Placed -> Seller Processing -> Dispatched -> Delivered).
  - Customer shipping address and payment method summary.
  - Full itemized purchase table with seller information.
  - Detailed financial breakdown.
  - **Print / Save Invoice** action (with print-optimized CSS).
  - "View All Orders" and "Continue Shopping" navigation.
- **Order History**: Persistent log of all mock orders placed in the application.

---

### 🚀 Running the Project

#### 1. Start the Development Server
```bash
ng serve
```
Open your browser and navigate to `http://localhost:4200/`.

#### 2. Run Unit Tests
```bash
ng test --watch=false
```
All 10 test suites and 19 unit tests will run and pass.

#### 3. Build for Production
```bash
ng build
```

---

### 🧪 How to Test Student 3's Deliverables

1. Open `http://localhost:4200/` (redirects to `/products`).
2. Click **"Add to Cart"** or **"♥ Wishlist"** on any item.
3. Click **"Cart"** in the top navigation:
   - Test incrementing/decrementing quantities.
   - Observe the subtotal, free delivery progress bar, and taxes updating in real time.
   - Enter coupon code `WELCOME10` or click one of the quick coupon chips.
   - Click **"Move to Wishlist"** on an item, then click **"Wishlist"** in the navbar to verify it moved.
   - From the wishlist, click **"Move to Cart"**.
4. In the cart, click **"Proceed to Checkout"**:
   - Click **"⚡ Auto-Fill Demo Address"** for 1-click form population.
   - Proceed to **Delivery Speed** and choose Express or Standard.
   - Proceed to **Payment** and choose Credit Card, UPI, or Cash on Delivery.
   - Click **"Confirm & Place Order"**.
5. Inspect the **Order Confirmation** page with complete receipt, fulfillment status, and order details.
