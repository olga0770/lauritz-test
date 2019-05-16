import {TempDataService} from '../services/temp-data.service';
import {BidsActions} from './bids.actions';
import {tassign} from 'tassign';
import {BidState} from '../store';

export const INITIAL_STATE: BidState = {bids: TempDataService.bids};

export function bidsReducer(state: BidState = INITIAL_STATE, action: any) {
  switch (action.type) {

    case BidsActions.ADD_BID:
      console.log(state);
      const newBids = [...state.bids, action.payload];
      const newState = tassign(state, {bids: newBids});
      console.log(newState);
      return newState;

    default:
      return state;
  }

}
