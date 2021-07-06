import { combineReducers } from 'redux';
import orcs from './orcsReducer';
import filteredOrcs from './filteredOrcsReducer';

const rootReducer = combineReducers({
  orcs,
  filteredOrcs
});

export default rootReducer;
