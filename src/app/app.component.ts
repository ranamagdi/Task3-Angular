import { Component } from '@angular/core';
import { PRODUCTS } from './Data/db';
import { IProduct } from './Data/IProduct';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommerce-task';
  bestProducts=PRODUCTS
  products: IProduct[] = [];

  onProductAdded(newProduct: IProduct) {
    this.products.push(newProduct);
  }
}
