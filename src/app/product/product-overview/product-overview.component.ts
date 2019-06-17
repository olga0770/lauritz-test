import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState} from '../../store';
import {IProduct} from '../../item';
import {TempDataService} from '../../services/temp-data.service';
import {ProductsActions} from '../../redux/products.actions';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css']
})

export class ProductOverviewComponent implements OnInit {
  products: IProduct[];
  isLoading: boolean;
  productSearch: string;

  constructor(private ngRedux: NgRedux<IAppState>, private temp: TempDataService, private productsActions: ProductsActions,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.productsActions.getProducts();
    this.ngRedux.select(state => state.products).subscribe(res => {
      this.products = res.products;
      this.isLoading = res.isLoading;
    });
  }

}
