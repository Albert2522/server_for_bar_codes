import {RECEIVE_UPCS, RECEIVE_UPC, REMOVE_UPC, RECEIVE_UPC_ERRORS} from '../actions/upcs_actions';
import merge from 'lodash/merge';

const _nullUpc = Object.freeze({
  upcs: {},
  upc: {},
  upcErrors: []
});

const UpcReducer = (state = _nullUpc, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_UPCS:
      let upcs = action.upcs;
      newState = merge({}, _nullUpc, {upcs});
      return newState;
    case RECEIVE_UPC:
      let upc = action.upc;
      newState = merge({}, state);
      newState.upcErrors = [ ];
      newState.upc = upc;
      newState.upcs[upc.id] = upc;
      return newState;
    case REMOVE_UPC:
      newState = merge({}, state);
      let id = action.upc.id;
      delete newState.upcs[id];
      return newState;
    case RECEIVE_UPC_ERRORS:
      let upcErrors = action.upcErrors;
      newState = merge({}, state);
      return merge({}, newState, {upcErrors});
    default:
      return state;
  }
};

export default UpcReducer;
