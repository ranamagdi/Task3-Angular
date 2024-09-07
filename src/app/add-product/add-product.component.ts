import { Component, EventEmitter, Output } from '@angular/core';
import { IProduct } from '../Data/IProduct';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  newProduct: IProduct = {

    Name: '',
    Description: '',
    Image: '',
    Price: 0
  };

  @Output() productAdded = new EventEmitter<IProduct>();

  onSubmit() {
    if (this.newProduct.Name && this.newProduct.Description && this.newProduct.Image && this.newProduct.Price) {
      this.productAdded.emit(this.newProduct);

    }
  }
}
