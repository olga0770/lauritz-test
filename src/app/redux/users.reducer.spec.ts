import {UserState} from '../store';
import { TempDataService } from '../services/temp-data.service';
const deepFreeze = require('deep-freeze-strict');
import { usersReducer } from './users.reducer';
import * as types from './users.actions';
import { IProduct, IUser, IBid } from '../item';

fdescribe('users reducer', () => {

  it('should add a new user', () => {
    const stateBefore = {users: []} as UserState;
    deepFreeze(stateBefore);

    const user = {_id: '1', username: 'smarty',
        profileImage: 'https://archive.icann.org/en/biog/photos/brent-big.jpg',
        firstname: 'Peter', lastname: 'Simonsen'};

    const stateAfter = {users: [user]};
    const response = usersReducer(stateBefore, {type: types.UsersActions.ADD_USER, payload: user});
    expect(stateAfter).toEqual(response);
  });

  it('should delete a user from the users array based on an id', () => {

    const beforeState = {users: [
        {_id: '1', username: 'Dummy'},
        {_id: '2', username: 'Pretty'},
        {_id: '3', username: 'Beauty'}
        ]} as UserState;
    deepFreeze(beforeState);
    const afterState = {users: [
        {_id: '1', username: 'Dummy'},
        {_id: '3', username: 'Beauty'}]};
    const response = usersReducer(beforeState, {type: types.UsersActions.DELETE_USER, payload: '2'});
    expect(afterState).toEqual(response);
  });

});
