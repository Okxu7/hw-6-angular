// import { Component, OnInit } from '@angular/core';
// import { Task4Service, ProductItem } from './services/task4.service'; // Перевірте свій шлях до сервісу

// @Component({
//   selector: 'app-task4',
//   standalone: false, // Залишаємо класичний підхід
//   templateUrl: './task4.component.html'
// })
// export class Task4Component implements OnInit {
//   productsList: ProductItem[] = [];
//   searchQuery: string = '';

//   constructor(private task4Service: Task4Service) {}

//   ngOnInit(): void {
//     this.productsList = this.task4Service.getProducts();
//   }

//   get filteredProducts(): ProductItem[] {
//     if (!this.searchQuery.trim()) {
//       return this.productsList;
//     }
    
//     const query = this.searchQuery.toLowerCase();
//     return this.productsList.filter(product => 
//       product.name.toLowerCase().includes(query)
//     );
//   }
// }


import { Component, OnInit } from '@angular/core';
import { Task4Service, ProductItem } from './services/task4.service';

@Component({
  selector: 'app-task4',
  standalone: false,
  templateUrl: './task4.component.html'
})
export class Task4Component implements OnInit {
  productsList: ProductItem[] = [];
  
  // Змінні для фільтрів
  searchQuery: string = '';
  maxPrice: number | null = null; // Нова змінна для фільтру ціни

  constructor(private task4Service: Task4Service) {}

  ngOnInit(): void {
    this.productsList = this.task4Service.getProducts();
  }

  get filteredProducts(): ProductItem[] {
    return this.productsList.filter(product => {
      // 1. Перевірка за текстом (шукаємо збіг у назві АБО описі)
      const query = this.searchQuery.toLowerCase().trim();
      const matchesText = !query || 
                          product.name.toLowerCase().includes(query) || 
                          product.description.toLowerCase().includes(query);

      // 2. Перевірка за ціною (якщо maxPrice введено, ціна товару має бути меншою або рівною)
      const matchesPrice = !this.maxPrice || product.price <= this.maxPrice;

      // Товар потрапляє у відфільтрований список, лише якщо виконуються ОБИДВІ умови (AND)
      return matchesText && matchesPrice;
    });
  }
}