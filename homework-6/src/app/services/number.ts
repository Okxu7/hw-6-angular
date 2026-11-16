import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {
  // Початковий масив цілочисельних значень
  private numbers: number[] = [42, 15, 89, 4, 23, 100, 7];

  getNumbers(): number[] {
    return this.numbers;
  }

  sortAscending(): number[] {
    // Створюємо копію масиву через [...] щоб не мутувати оригінал, та сортуємо
    return [...this.numbers].sort((a, b) => a - b);
  }

  sortDescending(): number[] {
    return [...this.numbers].sort((a, b) => b - a);
  }

  getMaxValue(): number {
    // Math.max приймає список аргументів, тому розгортаємо масив через ...
    return Math.max(...this.numbers);
  }
}