// import { Service } from '@angular/core';

// @Service()
// export class Products {}


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Автоматична реєстрація сервісу в додатку
})
export class ProductService {
  // Масив рядків з назвами товарів
  private productNames: string[] = [
    'Ноутбук Dell XPS',
    'Смартфон iPhone 16',
    'Навушники Sony WH-1000XM5',
    'Монітор Samsung Odyssey',
    'Клавіатура Keychron K2'
  ];

  // Метод, що повертає посилання на масив
  getProducts(): string[] {
    return this.productNames;
  }
}     