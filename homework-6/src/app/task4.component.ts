import { Component, OnInit } from '@angular/core';
import { Task4Service, ProductItem } from './services/task4.service'; // Перевірте свій шлях до сервісу

@Component({
  selector: 'app-task4',
  standalone: false, // Залишаємо класичний підхід
  templateUrl: './task4.component.html'
})
export class Task4Component implements OnInit {
  productsList: ProductItem[] = [];
  searchQuery: string = '';

  constructor(private task4Service: Task4Service) {}

  ngOnInit(): void {
    this.productsList = this.task4Service.getProducts();
  }

  get filteredProducts(): ProductItem[] {
    if (!this.searchQuery.trim()) {
      return this.productsList;
    }
    
    const query = this.searchQuery.toLowerCase();
    return this.productsList.filter(product => 
      product.name.toLowerCase().includes(query)
    );
  }
}