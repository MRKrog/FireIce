import { combineReducers } from 'redux';
import { housesReducer } from './housesReducer';
import { loadingReducer } from './loadingReducer';

export const rootReducer = combineReducers({
  houses: housesReducer,
  loading: loadingReducer
})
