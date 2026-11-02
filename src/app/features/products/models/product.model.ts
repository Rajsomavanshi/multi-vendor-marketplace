export interface SellerInfo {
  id: string;
  name: string;
  rating: number;
  salesCount: number;
  isVerified: boolean;
  location: string;
  badge?: string;
}

export interface ProductReview {
  id: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verifiedPurchase: boolean;
  helpfulCount: number;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  originalPrice: number;
  discountPercent: number;
  category: string;
  brand: string;
  seller: SellerInfo;
  rating: number;
  reviewsCount: number;
  stock: number;
  sku: string;
  imageUrl: string;
  galleryImages: string[];
  features: string[];
  specifications: Record<string, string>;
  tags: string[];
  isFeatured?: boolean;
  isBestSeller?: boolean;
  createdAt: string;
  reviews: ProductReview[];
}

export type SortOption =
  | 'featured'
  | 'price-asc'
  | 'price-desc'
  | 'rating-desc'
  | 'name-asc'
  | 'name-desc'
  | 'newest';

export interface ProductFilterCriteria {
  searchQuery: string;
  category: string;
  sellerId: string;
  minPrice: number | null;
  maxPrice: number | null;
  minRating: number;
  inStockOnly: boolean;
  sortBy: SortOption;
}

