import { Component, inject } from '@angular/core';
import { ProductList } from './components/product-list/product-list';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import {ProductCard} from './components/product-card/product-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  private productService = inject(ProductService);

  categories: Category[] = [];
  products: Product[] = [];
  selectedCategoryId: number | null = null;

  constructor() {
    this.categories = this.productService.getCategories();
    this.products = this.productService.getProducts();
  }

  selectCategory(id: number) {
    this.selectedCategoryId = id;
  }

  get filteredProducts(): Product[] {
    if (this.selectedCategoryId === null) return [];
    return this.products.filter(
      p => p.categoryId === this.selectedCategoryId
    );
  }

  onDelete(id:number){
    this.products = this.products.filter(p => p.id !== id);
  }
}
