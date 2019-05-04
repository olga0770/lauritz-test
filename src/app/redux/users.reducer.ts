import {TempDataService} from '../services/temp-data.service';
import {UsersActions} from './users.actions';
import {tassign} from 'tassign';
import {IProduct} from '../item';
import {IUser} from '../item';
import {IAppState, UserState} from '../store';

export const INITIAL_STATE: UserState = {users: []};

export function usersReducer(state: UserState = INITIAL_STATE, action: any) {
  switch (action.type) {

    case UsersActions.ADD_USER:
      action.payload._id = state.users.length + 1;
      return tassign( state, {
        users: state.users.concat(tassign(action.payload))
      });

    /*case UsersActions.DELETE_USER:
      return tassign(state, {
        users: state.users.filter(u => u._id !== action.payload)
      });*/

      default:
      return state;
  }

}


