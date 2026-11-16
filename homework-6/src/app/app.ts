import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/products';
import { NumberService } from  './services/number';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  
  // Завдання 1 та 2
  products: string[] = [];
  searchQuery: string = ''; 

  // Завдання 3
  numbersList: number[] = [];
  maxValue: number | null = null;

  constructor(
    private productService: ProductService,
    private numberService: NumberService
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.numbersList = this.numberService.getNumbers(); 
  }

  get filteredProducts(): string[] {
    if (!this.searchQuery.trim()) {
      return this.products; 
    }
    const lowerCaseQuery = this.searchQuery.toLowerCase();
    return this.products.filter(product => 
      product.toLowerCase().includes(lowerCaseQuery)
    );
  }

  sortAsc(): void {
    this.numbersList = this.numberService.sortAscending();
  }

  sortDesc(): void {
    this.numbersList = this.numberService.sortDescending();
  }

  findMax(): void {
    this.maxValue = this.numberService.getMaxValue();
  }
}