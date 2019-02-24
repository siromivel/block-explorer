import { combineReducers } from 'redux';
import query from './queryReducer';

export const rootReducer = combineReducers({ query });
export default rootReducer;
