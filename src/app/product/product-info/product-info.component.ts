import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProduct} from '../../item';
import {ProductsActions} from '../../redux/products.actions';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  @Input() product: IProduct;
  @Output() productOverview: EventEmitter<any> = new EventEmitter<any>();

  constructor(private productsActions: ProductsActions) { }

  ngOnInit() {
  }

  onProductClicked() {
    this.productOverview.emit(this.product);
  }

  deleteProduct(product) {
    this.productsActions.deleteProduct(product); }

}
