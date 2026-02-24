import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [
    {id: 1, name: 'Smartphones'},
    {id: 2, name: 'Laptops'},
    {id: 3, name: 'Tablets'},
    {id: 4, name: 'Accessories'}
  ];

  products: Product[] = [
    {
      id: 1,
      name: 'IPhone 15 128GB',
      description: 'The latest iPhone with powerful A16 chip and improved camera system.',
      price: 450000,
      rating: 4.7,
      image: 'images/id1.jpeg',
      images: ['images/id1.jpeg', 'images/id1.jpeg', 'images/id1.jpeg'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-black-113839915/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23',
      description: 'Powerful Android phone with AMOLED display and excellent camera.',
      price: 320000,
      rating: 4.5,
      image: 'images/id2.jpeg',
      images: ['images/id2.jpeg', 'images/id2.jpeg', 'images/id2.jpeg'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 3,
      name: 'Xiaomi Redmi Note 12',
      description: 'Budget-friendly Android phone with AMOLED display and long battery life.',
      price: 95000,
      rating: 4.4,
      image: 'images/id6.jpeg',
      images: ['images/id6.jpeg', 'images/id6.jpeg', 'images/id6.jpeg'],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-12/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 4,
      name: 'Samsung Galaxy A54',
      description: 'Mid-range Samsung smartphone with great display and battery.',
      price: 210000,
      rating: 4.3,
      image: 'images/id2.jpeg',
      images: ['images/id2.jpeg', 'images/id2.jpeg', 'images/id2.jpeg'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a54/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 5,
      name: 'iPhone 14 128GB',
      description: 'Reliable iPhone with powerful performance and premium design.',
      price: 390000,
      rating: 4.6,
      image: 'images/id1.jpeg',
      images: ['images/id1.jpeg', 'images/id1.jpeg', 'images/id1.jpeg'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb/',
      likes: 0,
      categoryId: 1
    },

    {
      id: 6,
      name: 'MacBook Air M2 13',
      description: 'Lightweight laptop with M2 chip and Retina display.',
      price: 550000,
      rating: 4.8,
      image: 'images/id3.jpeg',
      images: ['images/id3.jpeg', 'images/id3.jpeg', 'images/id3.jpeg'],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-m2-13/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 7,
      name: 'Huawei MateBook D15',
      description: 'Affordable laptop with Intel i5 and Full HD display.',
      price: 250000,
      rating: 4.3,
      image: 'images/id7.jpeg',
      images: ['images/id7.jpeg', 'images/id7.jpeg', 'images/id7.jpeg'],
      link: 'https://kaspi.kz/shop/p/huawei-matebook-d15/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 8,
      name: 'ASUS VivoBook 15',
      description: 'Slim and stylish laptop for everyday tasks.',
      price: 280000,
      rating: 4.4,
      image: 'images/id7.jpeg',
      images: ['images/id7.jpeg', 'images/id7.jpeg', 'images/id7.jpeg'],
      link: 'https://kaspi.kz/shop/p/asus-vivobook-15/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 9,
      name: 'Lenovo IdeaPad 3',
      description: 'Budget laptop with solid performance for students.',
      price: 220000,
      rating: 4.2,
      image: 'images/id7.jpeg',
      images: ['images/id7.jpeg', 'images/id7.jpeg', 'images/id7.jpeg'],
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 10,
      name: 'HP Pavilion 14',
      description: 'Compact laptop with modern design and fast SSD.',
      price: 300000,
      rating: 4.5,
      image: 'images/id7.jpeg',
      images: ['images/id7.jpeg', 'images/id7.jpeg', 'images/id7.jpeg'],
      link: 'https://kaspi.kz/shop/p/hp-pavilion-14/',
      likes: 0,
      categoryId: 2
    },

    {
      id: 11,
      name: 'iPad Pro 11" 128GB',
      description: 'Powerful tablet with Liquid Retina display.',
      price: 350000,
      rating: 4.6,
      image: 'images/id4.jpeg',
      images: ['images/id4.jpeg', 'images/id4.jpeg', 'images/id4.jpeg'],
      link: 'https://kaspi.kz/shop/p/apple-ipad-pro-11-128gb/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 12,
      name: 'Samsung Galaxy Tab S9',
      description: 'Premium Android tablet with AMOLED display.',
      price: 310000,
      rating: 4.5,
      image: 'images/id4.jpeg',
      images: ['images/id4.jpeg', 'images/id4.jpeg', 'images/id4.jpeg'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 13,
      name: 'iPad Air 5',
      description: 'Lightweight tablet with powerful M1 chip.',
      price: 330000,
      rating: 4.7,
      image: 'images/id4.jpeg',
      images: ['images/id4.jpeg', 'images/id4.jpeg', 'images/id4.jpeg'],
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-5/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 14,
      name: 'Xiaomi Pad 6',
      description: 'Affordable tablet with smooth performance.',
      price: 180000,
      rating: 4.3,
      image: 'images/id4.jpeg',
      images: ['images/id4.jpeg', 'images/id4.jpeg', 'images/id4.jpeg'],
      link: 'https://kaspi.kz/shop/p/xiaomi-pad-6/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 15,
      name: 'Lenovo Tab P11',
      description: 'Great tablet for entertainment and study.',
      price: 160000,
      rating: 4.2,
      image: 'images/id4.jpeg',
      images: ['images/id4.jpeg', 'images/id4.jpeg', 'images/id4.jpeg'],
      link: 'https://kaspi.kz/shop/p/lenovo-tab-p11/',
      likes: 0,
      categoryId: 3
    },

    {
      id: 16,
      name: 'Sony WH-1000XM5',
      description: 'Premium noise-cancelling wireless headphones.',
      price: 95000,
      rating: 4.9,
      image: 'images/id5.jpeg',
      images: ['images/id5.jpeg', 'images/id5.jpeg', 'images/id5.jpeg'],
      link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5/',
      likes: 0,
      categoryId: 4
    },
    {
      id: 17,
      name: 'Logitech MX Master 3',
      description: 'Wireless ergonomic mouse with excellent precision.',
      price: 35000,
      rating: 4.9,
      image: 'images/id9.jpeg',
      images: ['images/id9.jpeg', 'images/id9.jpeg', 'images/id9.jpeg'],
      link: 'https://kaspi.kz/shop/p/logitech-mx-master-3/',
      likes: 0,
      categoryId: 4
    },
    {
      id: 18,
      name: 'Apple Watch Series 9',
      description: 'Smartwatch with fitness tracking and ECG.',
      price: 175000,
      rating: 4.6,
      image: 'images/id10.jpeg',
      images: ['images/id10.jpeg', 'images/id10.jpeg', 'images/id10.jpeg'],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-9/',
      likes: 0,
      categoryId: 4
    },
    {
      id: 19,
      name: 'PlayStation 5',
      description: 'Next-gen gaming console with 4K support.',
      price: 300000,
      rating: 4.8,
      image: 'images/id8.jpeg',
      images: ['images/id8.jpeg', 'images/id8.jpeg', 'images/id8.jpeg'],
      link: 'https://kaspi.kz/shop/p/playstation-5/',
      likes: 0,
      categoryId: 4
    },
    {
      id: 20,
      name: 'AirPods Pro 2',
      description: 'Wireless earbuds with active noise cancellation.',
      price: 120000,
      rating: 4.7,
      image: 'images/id5.jpeg',
      images: ['images/id5.jpeg', 'images/id5.jpeg', 'images/id5.jpeg'],
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2/',
      likes: 0,
      categoryId: 4
    }

  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProducts(): Product[] {
    return this.products;
  }
}
