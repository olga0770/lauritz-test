import { IProduct } from './item';
import { Actions } from './actions';
import { tassign } from 'tassign';
import { TempDataService } from './services/temp-data.service';

export class ProductState {
  products: IProduct[];
  lastUpdate: Date;

}
export interface IAppState {
  products: IProduct[];
  lastUpdate: Date;
}

export const INITIAL_STATE: ProductState = {products: TempDataService.products, lastUpdate: new Date() };

export function rootReducer(state: ProductState = INITIAL_STATE, action: any) {
  switch (action.type) {

    // case Actions.ADD_PRODUCT:
    //   console.log('add item - old state', state);
    //   const newProducts = [...state.products, action.payload as IProduct];
    //   const newState = tassign(state, {products: newProducts});
    //   console.log('add item - new state', newState);
    //   return newState;

    case Actions.ADD_PRODUCT:
      action.payload._id = state.products.length + 1;
      return tassign( state, {
        products: state.products.concat(tassign(action.payload)),
        lastUpdate: new Date()
      });

    case Actions.DELETE_PRODUCT:
      return tassign(state, {
        products: state.products.filter(t => t._id !== action.payload._id),
        lastUpdate: new Date()
      });

    case Actions.EDIT_PRODUCT:
      const product = state.products.find(t => t._id === action.payload._id);
      const index = state.products.indexOf(product);
      return tassign(state, {
        products: [
          ...state.products.slice(0, index),
          tassign(action.payload),
        ]
      });


      // return tassign(state, {products: [...state.products, action.payload as IProduct]});



    // case TOGGLE_TODO:
    //   const todo = state.todos.find(t => t.id === action.id);
    //   const index = state.todos.indexOf(todo);
    //   return Object.assign({}, state, {
    //     todos: [
    //       ...state.todos.slice(0, index),
    //       Object.assign({}, todo, {isCompleted: !todo.isCompleted}),
    //       ...state.todos.slice(index + 1)
    //     ],
    //     lastUpdate: new Date()
    //   });

    //    case Actions.SHOW_PRODUCT:
    //       return tassign(state, {
    //         products: state.products.filter(t => t._id === action.payload),
    //         // lastUpdate: new Date()
    //       });


    // case REMOVE_ALL_ITEMS:
    //   return tassign(state, {
    //     items: [],
    //     lastUpdate: new Date()
    //   });
    //
    // case SHOW_ITEM:
    //   return tassign(state, {
    //     items: state.items.find(t => t.id === action.id),
    //     lastUpdate: new Date()
    //   });

    default:
      return state;
  }

}


