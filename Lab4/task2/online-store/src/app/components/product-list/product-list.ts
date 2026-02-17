import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Product} from '../../models/product.model';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: Product[] = [
    {
      id: 1,
      name: 'IPhone 15 128GB',
      description: 'The latest iPhone with powerful A16 chip and improved camera system.',
      price: 450000,
      rating: 4.7,
      image:  'images/id1.jpeg',
      images: ['images/id1.jpeg',
        'images/id1.jpeg',
        'images/id1.jpeg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-black-113839915/'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23',
      description: 'Powerful Android phone with AMOLED display and excellent camera.',
      price: 320000,
      rating: 4.5,
      image: 'images/id2.jpeg',
      images: [
        'images/id2.jpeg',
        'images/id2.jpeg',
        'images/id2.jpeg'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23/'
    },
    {
      id: 3,
      name: 'MacBook Air M2 13"',
      description: 'Lightweight laptop with M2 chip and Retina display for smooth performance.',
      price: 550000,
      rating: 4.8,
      image: 'images/id3.jpeg',
      images: [
        'images/id3.jpeg',
        'images/id3.jpeg',
        'images/id3.jpeg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-m2-13/'
    },
    {
      id: 4,
      name: 'iPad Pro 11" 128GB',
      description: 'Powerful tablet with Liquid Retina display and M1 chip for professionals.',
      price: 350000,
      rating: 4.6,
      image: 'images/id4.jpeg',
      images: [
        'images/id4.jpeg',
        'images/id4.jpeg',
        'images/id4.jpeg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-pro-11-128gb/'
    },
    {
      id: 5,
      name: 'Sony WH-1000XM5',
      description: 'Premium noise-cancelling wireless headphones with exceptional sound quality.',
      price: 95000,
      rating: 4.9,
      image: 'images/id5.jpeg',
      images: [
        'images/id5.jpeg',
        'images/id5.jpeg',
        'images/id5.jpeg'
      ],
      link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5/'
    },
    {
      id: 6,
      name: 'Xiaomi Redmi Note 12',
      description: 'Budget-friendly Android phone with AMOLED display and long battery life.',
      price: 95000,
      rating: 4.4,
      image: 'images/id6.jpeg',
      images: [
        'images/id6.jpeg',
        'images/id6.jpeg',
        'images/id6.jpeg'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-12/'
    },
    {
      id: 7,
      name: 'Huawei MateBook D15',
      description: 'Affordable laptop with Intel i5, full HD display, and good performance for daily tasks.',
      price: 250000,
      rating: 4.3,
      image: 'images/id7.jpeg',
      images: [
        'images/id7.jpeg',
        'images/id7.jpeg',
        'images/id7.jpeg'
      ],
      link: 'https://kaspi.kz/shop/p/huawei-matebook-d15/'
    },
    {
      id: 8,
      name: 'PlayStation 5',
      description: 'Next-gen gaming console with ultra-fast SSD and 4K gaming support.',
      price: 300000,
      rating: 4.8,
      image: 'images/id8.jpeg',
      images: [
        'images/id8.jpeg',
        'images/id8.jpeg',
        'images/id8.jpeg'
      ],
      link: 'https://kaspi.kz/shop/p/playstation-5/'
    },
    {
      id: 9,
      name: 'Logitech MX Master 3',
      description: 'Wireless ergonomic mouse with customizable buttons and excellent precision.',
      price: 35000,
      rating: 4.9,
      image: 'images/id7.jpeg',
      images: [
        'images/id9.jpeg',
        'images/id9.jpeg',
        'images/id9.jpeg'
      ],
      link: 'https://kaspi.kz/shop/p/logitech-mx-master-3/'
    },
    {
      id: 10,
      name: 'Apple Watch Series 9',
      description: 'Smartwatch with fitness tracking, ECG, and always-on Retina display.',
      price: 175000,
      rating: 4.6,
      image: 'images/id10.jpeg',
      images: [
        'images/id10.jpeg',
        'images/id10.jpeg',
        'images/id10.jpeg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-9/'
    }
  ];
}
