import {TempDataService} from '../services/temp-data.service';
import {ProductsActions} from './products.actions';
import {tassign} from 'tassign';
import {IProduct} from '../item';
import {IAppState, ProductState} from '../store';

// export const INITIAL_STATE: ProductState = {products: TempDataService.products};

export const INITIAL_STATE: ProductState = {products: TempDataService.products};

export function productsReducer(state: ProductState = INITIAL_STATE, action: any) {
  switch (action.type) {

    /*case ProductsActions.ADD_PRODUCT:
      console.log(state);
      const newProducts = [...state.products, action.payload];
      const newState = tassign(state, {products: newProducts});
      console.log(newState);
      return newState;*/

        case ProductsActions.ADD_PRODUCT:
          action.payload._id = state.products.length + 1;
          return tassign( state, {
            products: state.products.concat(tassign(action.payload))
          });

    case ProductsActions.DELETE_PRODUCT:
      return tassign(state, {
        products: state.products.filter(prod => prod._id !== action.payload)
      });

    case ProductsActions.UPDATE_PRODUCT:
       const stateBeforeUpdate = [...state.products];
       const index = stateBeforeUpdate.findIndex(prod => prod._id === action.payload._id);
       const stateAfterUpdate = [...state.products.slice(0, index), action.payload, ...state.products.slice(index + 1)];
       return tassign(state, {products: stateAfterUpdate});



/*
    case ProductsActions.UPDATE_PRODUCT:
      return state.map(product => {
        return product._id === action.payload._id ? tassign({}, product, action.payload) : product;
      });
*/




    default:
      return state;
  }

}


