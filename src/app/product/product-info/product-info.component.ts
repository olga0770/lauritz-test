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
  // @Output() productOverview: EventEmitter<any> = new EventEmitter<any>();

  constructor(private productsActions: ProductsActions) { }

  ngOnInit() {}

  deleteProduct(product) {
    if (!confirm('Are you sure you want to delete your product?')) {return; }
    this.productsActions.deleteProduct(product);
  }
}
