export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  sellerId: string;
  sellerName: string;
  sellerRating: number;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockCount: number;
  tags?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  addedAt: string;
}

export interface WishlistItem {
  product: Product;
  addedAt: string;
}

export interface ShippingAddress {
  fullName: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  addressType: 'Home' | 'Work' | 'Other';
}

export interface ShippingOption {
  id: string;
  name: string;
  description: string;
  cost: number;
  estimatedDays: string;
}

export interface PromoCode {
  code: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  minOrderValue: number;
  description: string;
}

export interface OrderItem {
  productId: string;
  productName: string;
  sellerName: string;
  price: number;
  quantity: number;
  totalPrice: number;
  imageUrl: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  createdAt: string;
  estimatedDeliveryDate: string;
  items: OrderItem[];
  itemCount: number;
  subtotal: number;
  deliveryCharge: number;
  discount: number;
  appliedPromoCode?: string;
  tax: number;
  total: number;
  shippingAddress: ShippingAddress;
  shippingOption: ShippingOption;
  paymentMethod: 'Credit / Debit Card' | 'UPI / NetBanking' | 'Cash on Delivery';
  paymentStatus: 'Paid' | 'Pending COD';
  orderStatus: 'Confirmed' | 'Processing' | 'Shipped' | 'Delivered';
}

