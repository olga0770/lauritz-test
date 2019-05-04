import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { IProduct } from '../item';

@Injectable({ providedIn: 'root'})
export class ProductsActions {
  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  static ADD_PRODUCT = 'ADD_PRODUCT';
  static DELETE_PRODUCT = 'DELETE_PRODUCT';
  static UPDATE_PRODUCT = 'UPDATE_PRODUCT';

  actionCreateProduct(product: IProduct): void {
    this.ngRedux.dispatch(
      {
        type: ProductsActions.ADD_PRODUCT,
        payload: product});
  }

  actionDeleteProduct(id: string): void {
    this.ngRedux.dispatch(
      {
        type: ProductsActions.DELETE_PRODUCT,
        payload: id});
  }

  actionUpdateProduct(product: IProduct): void {
    this.ngRedux.dispatch(
      {
        type: ProductsActions.UPDATE_PRODUCT,
        payload: product});
  }


}



