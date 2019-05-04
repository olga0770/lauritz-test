import { Component, OnInit } from '@angular/core';
import {IProduct} from '../item';
import { TempDataService } from '../services/temp-data.service';
import {NgRedux, select} from '@angular-redux/store';
import {IAppState} from '../store';
import {ProductsActions} from '../redux/products.actions';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // @select() products;

  products: IProduct[];
  // @select() items;

  constructor(private temp: TempDataService, private ngRedux: NgRedux<IAppState>, private productsActions: ProductsActions) { }

  ngOnInit() {
    // this.products = this.temp.getProducts();
    this.ngRedux.select(state => state.products).subscribe(res => {
      this.products = res.products;
    });
    }
  }

