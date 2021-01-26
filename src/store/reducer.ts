import { combineReducers } from 'redux';
import searchStore from './search-store';
import dataStore from './data-store';

const rootReducer = combineReducers({
  searchStore,
  dataStore,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
