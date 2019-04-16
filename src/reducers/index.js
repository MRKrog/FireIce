import { combineReducers } from 'redux';
import { personReducer } from './personReducer';
import { loadingReducer } from './loadingReducer';

export const rootReducer = combineReducers({
  people: personReducer,
  loading: loadingReducer
})
