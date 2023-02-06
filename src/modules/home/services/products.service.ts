import { Injectable } from '@nestjs/common';

import products from '../constants/products';
export interface IProducts {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface ICategories {
  label: string;
  url: string;
}

@Injectable()
export class ProductsService {
  private products: IProducts[] = products;
  private categories: ICategories[] = [
    {
      label: 'Smartphones',
      url: 'https://images.unsplash.com/photo-1535240073203-05bc5d7f1113?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHNtYXJ0cGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      label: 'Laptops',
      url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      label: 'Fragrances',
      url: 'https://images.unsplash.com/photo-1590736704728-f4730bb30770?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJhZ3JhbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      label: 'Skin Care',
      url: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2tpbiUyMGNhcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      label: 'Groceries',
      url: 'https://images.unsplash.com/photo-1579113800032-c38bd7635818?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3JvY2VyaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      label: 'Home Decoration',
      url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80',
    },
    {
      label: 'Furniture',
      url: 'https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    },
    {
      label: 'Tops',
      url: 'https://images.unsplash.com/photo-1485145782098-4f5fd605a66b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8VG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      label: 'Women Dresses',
      url: 'https://images.unsplash.com/photo-1631233999975-3d559f0526e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fERyZXNzZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      label: 'Women Shoes',
      url: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBzaG9lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      label: 'Men Shirts',
      url: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fE1lbiUyMHNoaXJ0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      label: 'Men Shoes',
      url: 'https://images.unsplash.com/photo-1632477575277-ade91dd5d8d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8TWVuJTIwc2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      label: 'Men Watches',
      url: 'https://images.unsplash.com/photo-1585123334904-845d60e97b29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    // 'womens-bags',
    // 'womens-jewellery',
    // 'sunglasses',
    // 'automotive',
    // 'motorcycle',
    // 'lighting',
  ];

  async getCategories(): Promise<ICategories[]> {
    return new Promise((resolve) => resolve(this.categories));
  }

  async getQuantityOfProducts(): Promise<number> {
    return new Promise((resolve) => resolve(this.products.length));
  }

  async getProducts(): Promise<IProducts[]> {
    return new Promise((resolve) => resolve(this.products));
  }
}
