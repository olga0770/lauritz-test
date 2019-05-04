import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { IProduct } from '../item';
import { IUser } from '../item';

@Injectable({ providedIn: 'root'})
export class UsersActions {
  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  static ADD_USER = 'ADD_USER';
  static DELETE_USER = 'DELETE_USER';

  actionAddUser(user: IUser): void {
    this.ngRedux.dispatch(
      {
        type: UsersActions.ADD_USER,
        payload: user});
  }

  actionDeleteUser(id: string): void {
    this.ngRedux.dispatch(
      {
        type: UsersActions.DELETE_USER,
        payload: id});
  }
  
}



