import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store';
import { IProduct } from './item';

@Injectable({ providedIn: 'root'})
export class Actions {
  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  static ADD_PRODUCT = 'ADD_ITEM';
  static DELETE_PRODUCT = 'REMOVE_ITEM';
  static EDIT_PRODUCT = 'EDIT_PRODUCT';
  static SHOW_PRODUCT = 'SHOW_PRODUCT';


  actionCreateProduct(product: IProduct): void {
    this.ngRedux.dispatch(
      {
        type: Actions.ADD_PRODUCT,
        payload: product});
  }

  actionDeleteProduct(product: IProduct): void {
    this.ngRedux.dispatch(
      {
        type: Actions.DELETE_PRODUCT,
        payload: product});
  }

  actionEditProduct(product: IProduct, id: string): void {
    this.ngRedux.dispatch(
      {
        type: Actions.EDIT_PRODUCT,
        payload: product});
  }

  // actionShowProduct(product: IProduct, id: string) {
  //   this.ngRedux.dispatch(
  //     {
  //       type: Actions.SHOW_PRODUCT,
  //       payload: product._id});
  // }

}




// toggleTodo(todo) {
//   this.ngRedux.dispatch({type: TOGGLE_TODO, id: todo.id});
// }
