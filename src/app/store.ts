import { IProduct } from './item';
import { ADD_ITEM, REMOVE_ITEM, REMOVE_ALL_ITEMS, SHOW_ITEM } from './actions';
import { tassign } from 'tassign';

export interface IAppState {
  items: IProduct[];
  lastUpdate: Date;
}

export const INITIAL_STATE = {
  items: [],
  lastUpdate: null
};

export function rootReducer(state, action) {
  switch (action.type) {
    case ADD_ITEM:
      action.product.id = state.items.length + 1;
      return tassign(state, {
        items: state.items.concat(tassign({}, action.product)),
        lastUpdate: new Date()
      });


    case REMOVE_ITEM:
      return tassign(state, {
        items: state.items.filter(t => t.id !== action.id),
        lastUpdate: new Date()
      });

    case REMOVE_ALL_ITEMS:
      return tassign(state, {
        items: [],
        lastUpdate: new Date()
      });

    case SHOW_ITEM:
      return tassign(state, {
        items: state.items.find(t => t.id === action.id),
        lastUpdate: new Date()
      });

  }
  return state;
}


