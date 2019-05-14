import {Injectable} from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {IAppState} from '../store';
import {IProduct} from '../item';
import {ProductsApiService} from '../services/products-api.service';

@Injectable({providedIn: 'root'})
export class ProductsActions {
  constructor(private ngRedux: NgRedux<IAppState>, private api: ProductsApiService) {}

  static ADD_PRODUCT = 'ADD_PRODUCT';
  static DELETE_PRODUCT = 'DELETE_PRODUCT';
  static UPDATE_PRODUCT = 'UPDATE_PRODUCT';

  static GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
  static GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';
  static GET_PRODUCTS_LOADING = 'GET_PRODUCTS_LOADING';

  static CREATE_PRODUCT_LOADING = 'CREATE_PRODUCT_LOADING';
  static CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
  static CREATE_PRODUCT_FAILURE = 'CREATE_PRODUCT_FAILURE';

  static DELETE_PRODUCT_LOADING = 'DELETE_PRODUCT_LOADING';
  static DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
  static DELETE_PRODUCT_FAILURE = 'DELETE_PRODUCT_FAILURE';


  /*  actionCreateProduct(product: IProduct): void {
      this.ngRedux.dispatch(
        {
          type: ProductsActions.ADD_PRODUCT,
          payload: product
        });
    }*/


  actionUpdateProduct(product: IProduct): void {
    this.ngRedux.dispatch(
      {
        type: ProductsActions.UPDATE_PRODUCT,
        payload: product
      });
  }


  getProducts() {
    this.ngRedux.dispatch({type: ProductsActions.GET_PRODUCTS_LOADING});

    this.api.getProducts().subscribe(result => {
      console.log(result);
      this.ngRedux.dispatch({
        type: ProductsActions.GET_PRODUCTS_SUCCESS,
        payload: result.filter(prod => prod.customerId === 'lauritzzzz')
      });
    }, error => {
      this.ngRedux.dispatch({
        type: ProductsActions.GET_PRODUCTS_FAILURE,
        payload: error
      });
    });
  }


  createNewProduct(product: IProduct): void {
    this.ngRedux.dispatch({
      type: ProductsActions.CREATE_PRODUCT_LOADING,
    });

    // Call api
    this.api.createProduct(product).subscribe(DataFromWebService => {
        console.log(DataFromWebService);

        // Dispatch action on success
        this.ngRedux.dispatch({
          type: ProductsActions.CREATE_PRODUCT_SUCCESS,
          payload: DataFromWebService
        });

        // Dispatch action on failure
      }, error => {
        this.ngRedux.dispatch({
          type: ProductsActions.CREATE_PRODUCT_FAILURE,
          payload: error
        });
      }
    );
  }


  /*  actionDeleteProduct(id: string): void {
      this.ngRedux.dispatch(
        {
          type: ProductsActions.DELETE_PRODUCT,
          payload: id
        });
    }*/


  deleteProduct(id: string): void {
    this.ngRedux.dispatch({
      type: ProductsActions.DELETE_PRODUCT_LOADING,
    });

    // Call api
    this.api.deleteProduct(id).subscribe(DataFromWebService => {
        console.log(id, DataFromWebService);
        this.ngRedux.dispatch({
          type: ProductsActions.DELETE_PRODUCT_SUCCESS,
          payload: id
        });

      }, error => {
        this.ngRedux.dispatch({
          type: ProductsActions.DELETE_PRODUCT_FAILURE,
          payload: error
        });
      });
  }
}



