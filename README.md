# 🛒 Multi-Vendor E-Commerce Marketplace

A modern **Multi-Vendor E-Commerce Marketplace** built using Angular. The platform allows customers to explore products, manage shopping carts and wishlists, place orders, and provides dedicated functionality for sellers and administrators.

## 🚀 Features

### 👤 Authentication
- User registration and login
- User profile management
- Role-based access and route protection

### 🛍️ Customer Features
- Browse and explore products
- Shopping cart management
- Add and remove wishlist products
- Checkout process
- Order confirmation
- Order history

### 🏪 Seller Features
- Seller dashboard
- Seller-specific marketplace functionality

### ⚙️ Admin Features
- Admin dashboard
- Administrative marketplace functionality

## 💻 Tech Stack

| Technology | Purpose |
|---|---|
| Angular 22 | Frontend framework |
| TypeScript | Application programming |
| HTML5 | Page structure |
| CSS3 | Styling and responsive design |
| Node.js | JavaScript runtime |
| npm | Package management |

## 📁 Project Structure

```text
multi-vendor-marketplace/
│
├── public/
├── src/
│   └── app/
│       ├── core/
│       ├── features/
│       │   ├── auth/
│       │   ├── products/
│       │   ├── cart/
│       │   ├── wishlist/
│       │   ├── checkout/
│       │   ├── seller/
│       │   └── admin/
│       ├── app.routes.ts
│       ├── app.ts
│       └── app.html
│
├── angular.json
├── package.json
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Rajsomavanshi/multi-vendor-marketplace.git
```

### 2. Navigate to the Project

```bash
cd multi-vendor-marketplace
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Development Server

```bash
ng serve
```

Open your browser and visit:

```text
http://localhost:4200/
```

## 🏗️ Build

To create a production build:

```bash
ng build
```

The generated build files will be available in the `dist/` directory.

## 🧪 Testing

Run unit tests using:

```bash
ng test
```

## 🎯 Project Objective

The objective of this project is to develop a centralized online marketplace where multiple sellers can offer their products while customers can conveniently browse, purchase, and track orders through a single platform.

## 👨‍💻 Development

This project was developed collaboratively as a team project, with different modules integrated into a single Angular application.

## 📌 Future Enhancements

- Payment gateway integration
- Backend and database integration
- Real-time order tracking
- Seller product management
- Product reviews and ratings
- Advanced product search and filtering

## 👨‍💻 Team Members

This project was developed collaboratively by the following team members:

| No. | Team Member | Responsibility |
|:---:|---|---|
| 1 | **Raj Somvanshi** | Admin Dashboard, Reports & Integration |
| 2 | **Darshan Phopase** | User Authentication & Profile Management |
| 3 | **Aditya Kadu** | Product Catalogue & Search |
| 4 | **Jay Londhe** | Cart, Wishlist & Checkout |
| 5 | **Pankaj Aher** | Seller Dashboard & Inventory |



---

**⭐ If you find this project interesting, consider giving the repository a star!**
