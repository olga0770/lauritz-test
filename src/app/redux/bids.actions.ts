import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import {IBid, IProduct, IUser} from '../item';

@Injectable({ providedIn: 'root'})
export class BidsActions {
  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  static ADD_BID = 'ADD_USER';

  addBid(bid: IBid): void {
    this.ngRedux.dispatch(
      {type: BidsActions.ADD_BID,
        payload: bid});
  }

}
