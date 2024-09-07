import { Component, Input, ViewEncapsulation } from '@angular/core';

import { IProduct } from '../Data/IProduct';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  encapsulation: ViewEncapsulation.None,
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class ProductsComponent {
@Input({required:true}) product!:IProduct
}
