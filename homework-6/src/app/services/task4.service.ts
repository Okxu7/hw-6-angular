import { Injectable } from '@angular/core';

// Інтерфейс для опису структури об'єкта товару
export interface ProductItem {
  id: number;
  name: string;
  price: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class Task4Service {
  private products: ProductItem[] = [
    { id: 1, name: 'product 1', price: 110, description: 'product1 text description' },
    { id: 2, name: 'product 2', price: 120, description: 'product2 text description' },
    { id: 3, name: 'product 3', price: 130, description: 'product3 text description' }
  ];

  getProducts(): ProductItem[] {
    return this.products;
  }
}