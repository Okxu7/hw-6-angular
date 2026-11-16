 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // 1. Додайте імпорт FormsModule з пакунка forms

import { AppComponent } from './app';
// 1. Імпортуємо новий компонент
import { Task4Component } from './task4.component';


@NgModule({
  declarations: [
    AppComponent,
    Task4Component // 2. Додаємо його сюди
   ],
  imports: [
    BrowserModule,
    FormsModule // 2. Додайте FormsModule у масив imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }