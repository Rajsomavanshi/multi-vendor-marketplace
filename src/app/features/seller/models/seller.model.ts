export interface SellerInfoItem {
  id: string;
  name: string;
  rating: number;
  salesCount: number;
  isVerified: boolean;
  location: string;
  badge?: string;
  avatarUrl?: string;
}

export type StockStatus = 'In Stock' | 'Low Stock' | 'Out of Stock';

export interface SellerProduct {
  id: string;
  name: string;
  sku: string;
  category: string;
  price: number;
  originalPrice: number;
  stock: number;
  sellerId: string;
  sellerName: string;
  imageUrl: string;
  description: string;
  tagline?: string;
  brand?: string;
  rating: number;
  reviewsCount: number;
  tags?: string[];
  createdAt: string;
  status: StockStatus;
}

export type OrderStatus = 'Confirmed' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';

export interface SellerOrderItem {
  productId: string;
  productName: string;
  sku: string;
  price: number;
  quantity: number;
  total: number;
  imageUrl: string;
}

export interface SellerOrder {
  id: string;
  orderNumber: string;
  createdAt: string;
  estimatedDeliveryDate?: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  shippingAddress: string;
  shippingCity: string;
  items: SellerOrderItem[];
  itemCount: number;
  totalAmount: number;
  paymentMethod: 'Credit / Debit Card' | 'UPI / NetBanking' | 'Cash on Delivery';
  paymentStatus: 'Paid' | 'Pending COD';
  status: OrderStatus;
  trackingNumber?: string;
}

export interface SellerDashboardStats {
  totalRevenue: number;
  revenueGrowth: string;
  totalOrders: number;
  orderGrowth: string;
  pendingOrders: number;
  shippedOrders: number;
  deliveredOrders: number;
  totalProducts: number;
  inStockCount: number;
  lowStockCount: number;
  outOfStockCount: number;
  fulfillmentRate: number;
  totalInventoryUnits: number;
  totalInventoryValue: number;
}

export interface ProductFormData {
  name: string;
  category: string;
  sku: string;
  price: number;
  originalPrice: number;
  stock: number;
  brand: string;
  tagline: string;
  description: string;
  imageUrl: string;
  tags: string;
}
