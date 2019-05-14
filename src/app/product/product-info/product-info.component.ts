import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProduct} from '../../item';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  @Input() product: IProduct;
  @Output() productOverview: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onProductClicked() {
    this.productOverview.emit(this.product);
  }

}
