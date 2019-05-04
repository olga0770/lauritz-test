import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState} from '../../store';
import {IProduct} from '../../item';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css']
})
export class ProductOverviewComponent implements OnInit {
  // @select() products;
  products: IProduct[];
  // @select() lastUpdate;
  lastUpdate: Date;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.ngRedux.select(state => state.products).subscribe(res => {
      this.products = res.products;
    });

    /*this.ngRedux.select(state => state.lastUpdate).subscribe(res => {
      this.lastUpdate = new Date();
    });*/
  }
}
