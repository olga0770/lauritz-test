import {BidState} from '../store';
import { TempDataService } from '../services/temp-data.service';
const deepFreeze = require('deep-freeze-strict');
import { bidsReducer } from './bids.reducer';
import * as types from './bids.actions';
import { IProduct, IUser, IBid } from '../item';

fdescribe('bids reducer', () => {

  it('should add a new bid', () => {
    const stateBefore = {bids: []} as BidState;
    deepFreeze(stateBefore);

    const bid = {_id: '3', userId: '4', amount: 55000, date: new Date(2019, 5, 13)};

    const stateAfter = {bids: [bid]};
    const response = bidsReducer(stateBefore, {type: types.BidsActions.ADD_BID, payload: bid});
    expect(stateAfter).toEqual(response);
  });



});
