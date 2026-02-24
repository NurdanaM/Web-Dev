import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  product = input.required<Product>();
  delete = output<number>();

  like(){
    this.product().likes++;
  }
  onDelete(){
    this.delete.emit(this.product().id);
  }
  getStars(rating: number): number[] {
    return Array(Math.floor(rating));
  }
  hasHalfStar(rating: number): boolean {
    return rating % 1 >= 0.5;
  }
  encode(value:string): string {
    return encodeURIComponent(value);
  }
}
