import { Injectable, signal } from '@angular/core';
import { Product } from '../models/marketplace.models';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly mockProducts: Product[] = [
    {
      id: 'prod-101',
      name: 'Sony WH-1000XM5 Noise Canceling Headphones',
      description: 'Industry-leading noise canceling headphones with dual processors and 8 microphones for superior audio clarity.',
      price: 24990,
      originalPrice: 29990,
      category: 'Electronics',
      sellerId: 'seller-1',
      sellerName: 'Apex Electronics',
      sellerRating: 4.8,
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80',
      rating: 4.8,
      reviewCount: 1420,
      inStock: true,
      stockCount: 15,
      tags: ['Bestseller', 'Electronics', 'Audio'],
    },
    {
      id: 'prod-102',
      name: 'Ultra Slim Minimalist Leather Wallet',
      description: 'Handcrafted full-grain leather bifold with RFID blocking protection and slim profile card slots.',
      price: 1299,
      originalPrice: 1999,
      category: 'Fashion',
      sellerId: 'seller-2',
      sellerName: 'Urban Craft Leather',
      sellerRating: 4.6,
      imageUrl: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&auto=format&fit=crop&q=80',
      rating: 4.5,
      reviewCount: 380,
      inStock: true,
      stockCount: 32,
      tags: ['Fashion', 'Accessories'],
    },
    {
      id: 'prod-103',
      name: 'Mechanical Gaming Keyboard RGB',
      description: 'Tenkeyless mechanical keyboard with tactile switches, customizable per-key RGB backlighting, and aluminum frame.',
      price: 4499,
      originalPrice: 5999,
      category: 'Electronics',
      sellerId: 'seller-1',
      sellerName: 'Apex Electronics',
      sellerRating: 4.8,
      imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80',
      rating: 4.7,
      reviewCount: 890,
      inStock: true,
      stockCount: 8,
      tags: ['Gaming', 'Tech'],
    },
    {
      id: 'prod-104',
      name: 'Ceramic Pour-Over Coffee Maker Set',
      description: 'Artisan ceramic dripper with wooden collar, heat-resistant borosilicate glass carafe, and 40 paper filters.',
      price: 1850,
      originalPrice: 2299,
      category: 'Home & Kitchen',
      sellerId: 'seller-3',
      sellerName: 'Nordic Living Co.',
      sellerRating: 4.9,
      imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80',
      rating: 4.9,
      reviewCount: 245,
      inStock: true,
      stockCount: 20,
      tags: ['Kitchen', 'Home'],
    },
    {
      id: 'prod-105',
      name: 'Smart Fitness Tracker & AMOLED Watch',
      description: 'Continuous heart rate monitoring, SpO2 sensor, sleep analytics, 50m water resistance, and 14-day battery life.',
      price: 3299,
      originalPrice: 4999,
      category: 'Wearables',
      sellerId: 'seller-4',
      sellerName: 'Pulse Smart Tech',
      sellerRating: 4.4,
      imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80',
      rating: 4.3,
      reviewCount: 512,
      inStock: true,
      stockCount: 18,
      tags: ['Fitness', 'Wearables'],
    },
    {
      id: 'prod-106',
      name: 'Organic Bamboo Ergonomic Laptop Stand',
      description: 'Sustainably sourced natural bamboo stand promoting ergonomic posture, with heat dissipation slots and cable organizer.',
      price: 1450,
      originalPrice: 1890,
      category: 'Home & Kitchen',
      sellerId: 'seller-3',
      sellerName: 'Nordic Living Co.',
      sellerRating: 4.9,
      imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&auto=format&fit=crop&q=80',
      rating: 4.6,
      reviewCount: 167,
      inStock: true,
      stockCount: 25,
      tags: ['Eco-friendly', 'Office'],
    },
    {
      id: 'prod-107',
      name: 'Premium Canvas & Suede Weekend Travel Bag',
      description: 'Heavy-duty water-resistant canvas duffel with brass hardware, shoe compartment, and padded shoulder strap.',
      price: 3890,
      originalPrice: 5200,
      category: 'Fashion',
      sellerId: 'seller-2',
      sellerName: 'Urban Craft Leather',
      sellerRating: 4.6,
      imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80',
      rating: 4.7,
      reviewCount: 420,
      inStock: true,
      stockCount: 12,
      tags: ['Travel', 'Fashion'],
    },
    {
      id: 'prod-108',
      name: 'Portable Bluetooth 5.3 Waterproof Speaker',
      description: '360-degree immersive bass sound, IP67 waterproof rating, 20 hours continuous playtime, and built-in powerbank.',
      price: 2799,
      originalPrice: 3499,
      category: 'Electronics',
      sellerId: 'seller-1',
      sellerName: 'Apex Electronics',
      sellerRating: 4.8,
      imageUrl: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&auto=format&fit=crop&q=80',
      rating: 4.6,
      reviewCount: 630,
      inStock: true,
      stockCount: 40,
      tags: ['Audio', 'Electronics'],
    },
  ];

  readonly products = signal<Product[]>(this.mockProducts);

  getAll(): Product[] {
    return this.products();
  }

  getById(id: string): Product | undefined {
    return this.products().find((p) => p.id === id);
  }

  getByCategory(category: string): Product[] {
    if (!category || category === 'All') return this.products();
    return this.products().filter((p) => p.category.toLowerCase() === category.toLowerCase());
  }

  getCategories(): string[] {
    const categories = new Set(this.mockProducts.map((p) => p.category));
    return ['All', ...Array.from(categories)];
  }

  getSellers(): string[] {
    const sellers = new Set(this.mockProducts.map((p) => p.sellerName));
    return ['All Sellers', ...Array.from(sellers)];
  }
}

