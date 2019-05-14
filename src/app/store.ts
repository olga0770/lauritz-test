import {IProduct, IUser} from './item';
import {combineReducers} from 'redux';
import {routerReducer} from '@angular-redux/router';
import {productsReducer} from './redux/products.reducer';
import {usersReducer} from './redux/users.reducer';
import {TempDataService} from './services/temp-data.service';

export class ProductState {
  products: IProduct[];
  isLoading: boolean;
  // lastUpdate: null;
}

export class UserState {
  users: IUser[];
}

export class IAppState {
  products?: ProductState;
  // lastUpdate?: Date;
  users?: UserState;
}

export const rootReducer = combineReducers<IAppState>({
  products: productsReducer,
  users: usersReducer,

  router: routerReducer
} as any);


