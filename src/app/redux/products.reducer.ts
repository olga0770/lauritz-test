import {TempDataService} from '../services/temp-data.service';
import {ProductsActions} from './products.actions';
import {tassign} from 'tassign';
import {ProductState} from '../store';

export const INITIAL_STATE: ProductState = {products: TempDataService.products, isLoading: false};

export function productsReducer(state: ProductState = INITIAL_STATE, action: any) {
  switch (action.type) {

/*    case ProductsActions.ADD_PRODUCT:
      console.log(state);
      const newProducts = [...state.products, action.payload];
      const newState = tassign(state, {products: newProducts});
      console.log(newState);
      return newState;*/

/*        case ProductsActions.ADD_PRODUCT:
          action.payload._id = state.products.length + 1;
          return tassign( state, {
            products: state.products.concat(tassign(action.payload))
          });*/

/*    case ProductsActions.DELETE_PRODUCT_SUCCESS:
      return tassign(state, {
        products: state.products.filter(prod => prod._id !== action.payload)
      });*/

/*
    case ProductsActions.UPDATE_PRODUCT:
       const stateBeforeUpdate = [...state.products];
       const index = stateBeforeUpdate.findIndex(prod => prod._id === action.payload._id);
       const stateAfterUpdate = [...state.products.slice(0, index), action.payload, ...state.products.slice(index + 1)];
       return tassign(state, {products: stateAfterUpdate}
       );
*/


    case ProductsActions.UPDATE_PRODUCT:
      const stateBeforeUpdate = [...state.products];
      const index = stateBeforeUpdate.findIndex(prod => prod._id === action.payload._id);
      const stateAfterUpdate = [...state.products.slice(0, index), ...action.payload, ...state.products.slice(index + 1)];
      return tassign(state, {products: stateAfterUpdate}
      );




    // API
    case ProductsActions.GET_PRODUCTS_LOADING:
      return tassign(state, {isLoading: true});

    case ProductsActions.GET_PRODUCTS_SUCCESS:
      console.log(action.payload);
      return tassign(state, {products: action.payload, isLoading: false});

    case ProductsActions.GET_PRODUCTS_FAILURE:
      console.log(action.payload);
      return tassign(state, {isLoading: false});




    case ProductsActions.CREATE_PRODUCT_FAILURE:
      // display an error message
      console.log(action.payload);
      return state;

    case ProductsActions.CREATE_PRODUCT_LOADING:
      return tassign(state, {isLoading: true});

    case ProductsActions.CREATE_PRODUCT_SUCCESS:
      // Create a new array with the "old array" and the new product
      console.log(state);
      const newProducts = [...state.products, action.payload];
      const newState = tassign(state, {products: newProducts, isLoading: false});
      console.log(newState);
      return newState;


    case ProductsActions.DELETE_PRODUCT_FAILURE:
      // display an error message
      console.log(action.payload);
      return state;

    case ProductsActions.DELETE_PRODUCT_LOADING:
      return tassign(state, {isLoading: true});

    case ProductsActions.DELETE_PRODUCT_SUCCESS:
      return tassign(state, {
        products: state.products.filter(prod => prod._id !== action.payload)
      });


    default:
      return state;
  }

}


