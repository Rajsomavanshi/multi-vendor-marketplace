import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  OrderStatus,
  ProductFormData,
  SellerOrder,
  SellerProduct,
  StockStatus,
} from './models/seller.model';
import { SellerService } from './services/seller.service';

export interface ImagePreset {
  label: string;
  category: string;
  url: string;
}

@Component({
  selector: 'app-seller',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrl: './seller.css',
  templateUrl: './seller.html',
})
export class Seller implements OnInit {
  readonly sellerService = inject(SellerService);

  // Active navigation tab
  activeTab: 'overview' | 'inventory' | 'orders' = 'overview';

  // Products filtering & sorting
  productSearchQuery: string = '';
  productCategoryFilter: string = 'All';
  productStockFilter: 'All' | 'In Stock' | 'Low Stock' | 'Out of Stock' = 'All';
  productSortBy: 'name-asc' | 'price-asc' | 'price-desc' | 'stock-asc' | 'stock-desc' = 'name-asc';

  // Orders filtering
  orderSearchQuery: string = '';
  orderStatusFilter: 'All' | OrderStatus = 'All';

  // Toast feedback
  toastMessage = signal<string | null>(null);

  // Add / Edit Modal state
  isProductModalOpen: boolean = false;
  modalMode: 'add' | 'edit' = 'add';
  editingProductId: string | null = null;
  formErrors: Record<string, string> = {};

  productForm: ProductFormData = this.getEmptyForm();

  // Preset image library for easy quick-fill during demos
  readonly imagePresets: ImagePreset[] = [
    {
      label: 'Headphones',
      category: 'Electronics',
      url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80',
    },
    {
      label: 'Smart Watch',
      category: 'Electronics',
      url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80',
    },
    {
      label: 'Mechanical Keyboard',
      category: 'Electronics',
      url: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80',
    },
    {
      label: 'Bluetooth Speaker',
      category: 'Audio',
      url: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&auto=format&fit=crop&q=80',
    },
    {
      label: 'Leather Wallet',
      category: 'Fashion',
      url: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&auto=format&fit=crop&q=80',
    },
    {
      label: 'Coffee Carafe',
      category: 'Home & Kitchen',
      url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80',
    },
    {
      label: 'Bamboo Stand',
      category: 'Home & Kitchen',
      url: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&auto=format&fit=crop&q=80',
    },
    {
      label: 'Travel Duffel',
      category: 'Fashion',
      url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80',
    },
  ];

  // Delete modal state
  isDeleteModalOpen: boolean = false;
  deletingProduct: SellerProduct | null = null;

  // Order Details Modal state
  isOrderDetailsModalOpen: boolean = false;
  selectedOrder: SellerOrder | null = null;

  ngOnInit(): void {
    // Component initialized
  }

  // ================= Computed Filtered Products =================
  get filteredProducts(): SellerProduct[] {
    let list = [...this.sellerService.sellerProducts()];

    // Search query
    if (this.productSearchQuery.trim()) {
      const q = this.productSearchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.sku.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.brand && p.brand.toLowerCase().includes(q))
      );
    }

    // Category filter
    if (this.productCategoryFilter !== 'All') {
      list = list.filter((p) => p.category === this.productCategoryFilter);
    }

    // Stock Status filter
    if (this.productStockFilter !== 'All') {
      list = list.filter((p) => p.status === this.productStockFilter);
    }

    // Sort
    switch (this.productSortBy) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'stock-asc':
        list.sort((a, b) => a.stock - b.stock);
        break;
      case 'stock-desc':
        list.sort((a, b) => b.stock - a.stock);
        break;
      case 'name-asc':
      default:
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return list;
  }

  // ================= Computed Filtered Orders =================
  get filteredOrders(): SellerOrder[] {
    let list = [...this.sellerService.sellerOrders()];

    // Search query
    if (this.orderSearchQuery.trim()) {
      const q = this.orderSearchQuery.toLowerCase().trim();
      list = list.filter(
        (o) =>
          o.orderNumber.toLowerCase().includes(q) ||
          o.customerName.toLowerCase().includes(q) ||
          o.customerEmail.toLowerCase().includes(q) ||
          o.shippingCity.toLowerCase().includes(q) ||
          o.items.some((i) => i.productName.toLowerCase().includes(q))
      );
    }

    // Status filter
    if (this.orderStatusFilter !== 'All') {
      list = list.filter((o) => o.status === this.orderStatusFilter);
    }

    // Sort newest first
    list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return list;
  }

  // Products needing replenishment for Quick Alert banner
  get lowStockProducts(): SellerProduct[] {
    return this.sellerService.sellerProducts().filter((p) => p.stock <= 5);
  }

  // ================= Seller Switching =================
  onSellerChange(sellerId: string): void {
    this.sellerService.setActiveSeller(sellerId);
    this.productCategoryFilter = 'All';
    this.showToast(`Switched vendor view: ${this.currentSellerName}`);
  }

  get currentSellerName(): string {
    return this.sellerService.currentSeller()?.name || 'All Multi-Vendors';
  }

  // ================= Tab Navigation =================
  setTab(tab: 'overview' | 'inventory' | 'orders'): void {
    this.activeTab = tab;
  }

  // ================= Add / Edit Product Modal =================
  openAddProductModal(): void {
    this.modalMode = 'add';
    this.editingProductId = null;
    this.productForm = this.getEmptyForm();
    this.formErrors = {};
    this.isProductModalOpen = true;
  }

  openEditProductModal(product: SellerProduct): void {
    this.modalMode = 'edit';
    this.editingProductId = product.id;
    this.productForm = {
      name: product.name,
      category: product.category,
      sku: product.sku,
      price: product.price,
      originalPrice: product.originalPrice || product.price,
      stock: product.stock,
      brand: product.brand || '',
      tagline: product.tagline || '',
      description: product.description || '',
      imageUrl: product.imageUrl,
      tags: product.tags ? product.tags.join(', ') : '',
    };
    this.formErrors = {};
    this.isProductModalOpen = true;
  }

  closeProductModal(): void {
    this.isProductModalOpen = false;
    this.formErrors = {};
  }

  selectPresetImage(url: string, category: string): void {
    this.productForm.imageUrl = url;
    if (!this.productForm.category || this.productForm.category === 'Electronics') {
      this.productForm.category = category;
    }
  }

  validateForm(): boolean {
    this.formErrors = {};

    if (!this.productForm.name || this.productForm.name.trim().length < 3) {
      this.formErrors['name'] = 'Product title must be at least 3 characters.';
    }

    if (!this.productForm.category || this.productForm.category === 'All') {
      this.formErrors['category'] = 'Please select a valid product category.';
    }

    if (!this.productForm.price || this.productForm.price <= 0) {
      this.formErrors['price'] = 'Price must be greater than 0.';
    }

    if (this.productForm.originalPrice && this.productForm.originalPrice < this.productForm.price) {
      this.formErrors['originalPrice'] = 'Original price (MRP) should be equal to or higher than selling price.';
    }

    if (this.productForm.stock === null || this.productForm.stock === undefined || this.productForm.stock < 0) {
      this.formErrors['stock'] = 'Stock quantity cannot be negative.';
    }

    if (!this.productForm.imageUrl || !this.productForm.imageUrl.trim()) {
      this.formErrors['imageUrl'] = 'Product image URL is required (or select a quick preset below).';
    }

    return Object.keys(this.formErrors).length === 0;
  }

  saveProduct(): void {
    if (!this.validateForm()) {
      return;
    }

    if (this.modalMode === 'add') {
      const newProduct = this.sellerService.addProduct(this.productForm);
      this.showToast(`Product "${newProduct.name}" created successfully!`);
    } else if (this.editingProductId) {
      this.sellerService.updateProduct(this.editingProductId, this.productForm);
      this.showToast(`Product "${this.productForm.name}" updated successfully!`);
    }

    this.closeProductModal();
  }

  // ================= Delete Product =================
  openDeleteModal(product: SellerProduct): void {
    this.deletingProduct = product;
    this.isDeleteModalOpen = true;
  }

  closeDeleteModal(): void {
    this.isDeleteModalOpen = false;
    this.deletingProduct = null;
  }

  confirmDelete(): void {
    if (this.deletingProduct) {
      const name = this.deletingProduct.name;
      this.sellerService.deleteProduct(this.deletingProduct.id);
      this.showToast(`Product "${name}" deleted.`);
      this.closeDeleteModal();
    }
  }

  // ================= Stock Quantity Management =================
  incrementStock(product: SellerProduct): void {
    this.sellerService.adjustStock(product.id, 1);
    this.showToast(`Stock updated for ${product.name}: ${product.stock + 1} units`);
  }

  decrementStock(product: SellerProduct): void {
    if (product.stock > 0) {
      this.sellerService.adjustStock(product.id, -1);
      this.showToast(`Stock updated for ${product.name}: ${product.stock - 1} units`);
    } else {
      this.showToast(`Item is already out of stock!`);
    }
  }

  quickRestock(product: SellerProduct, amount: number): void {
    this.sellerService.adjustStock(product.id, amount);
    this.showToast(`Restocked +${amount} units for ${product.name}!`);
  }

  onStockInputBlur(product: SellerProduct, event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = parseInt(input.value, 10);
    if (!isNaN(value) && value >= 0) {
      this.sellerService.updateStock(product.id, value);
      this.showToast(`Stock set to ${value} for ${product.name}`);
    } else {
      input.value = product.stock.toString();
    }
  }

  // ================= Order Status Updates =================
  onOrderStatusChange(order: SellerOrder, event: Event): void {
    const select = event.target as HTMLSelectElement;
    const newStatus = select.value as OrderStatus;
    this.sellerService.updateOrderStatus(order.id, newStatus);
    this.showToast(`Order #${order.orderNumber} status changed to ${newStatus}`);
  }

  openOrderDetails(order: SellerOrder): void {
    this.selectedOrder = order;
    this.isOrderDetailsModalOpen = true;
  }

  closeOrderDetails(): void {
    this.isOrderDetailsModalOpen = false;
    this.selectedOrder = null;
  }

  updateSelectedOrderStatus(newStatus: OrderStatus): void {
    if (this.selectedOrder) {
      this.sellerService.updateOrderStatus(this.selectedOrder.id, newStatus);
      this.selectedOrder = {
        ...this.selectedOrder,
        status: newStatus,
      };
      this.showToast(`Order status updated to ${newStatus}`);
    }
  }

  // ================= Helper Utilities =================
  resetDemo(): void {
    this.sellerService.resetToMockData();
    this.productSearchQuery = '';
    this.productCategoryFilter = 'All';
    this.productStockFilter = 'All';
    this.orderSearchQuery = '';
    this.orderStatusFilter = 'All';
    this.showToast('Demo seller inventory and orders reset successfully!');
  }

  showToast(message: string): void {
    this.toastMessage.set(message);
    setTimeout(() => {
      this.toastMessage.set(null);
    }, 3200);
  }

  getStockBadgeClass(status: StockStatus): string {
    switch (status) {
      case 'In Stock':
        return 'badge-instock';
      case 'Low Stock':
        return 'badge-lowstock';
      case 'Out of Stock':
        return 'badge-outofstock';
    }
  }

  getOrderStatusBadgeClass(status: OrderStatus): string {
    switch (status) {
      case 'Confirmed':
        return 'order-badge-confirmed';
      case 'Processing':
        return 'order-badge-processing';
      case 'Shipped':
        return 'order-badge-shipped';
      case 'Delivered':
        return 'order-badge-delivered';
      case 'Cancelled':
        return 'order-badge-cancelled';
    }
  }

  private getEmptyForm(): ProductFormData {
    return {
      name: '',
      category: 'Electronics',
      sku: '',
      price: 999,
      originalPrice: 1499,
      stock: 10,
      brand: '',
      tagline: '',
      description: '',
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80',
      tags: '',
    };
  }
}
