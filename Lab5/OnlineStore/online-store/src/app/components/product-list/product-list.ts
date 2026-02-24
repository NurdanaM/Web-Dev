import {Component, input, output} from '@angular/core';
import {Product} from '../../models/product.model';
import { ProductCard } from '../product-card/product-card';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

  products = input.required<Product[]>();
  delete = output<number>();

  onDelete(id:number){
    this.delete.emit(id);
  }

}
