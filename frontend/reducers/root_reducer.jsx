import { combineReducers } from 'redux';

import UpcReducer from './upc_reducer';

const rootReducer = combineReducers({
  upc: UpcReducer
});

export default rootReducer;
