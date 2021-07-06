import actionTypes from '../actions/actionTypes';

function filteredOrcsReducer(filteredOrcs = [], action) {
  const newOrcs = [...filteredOrcs];
  switch (action.type) {
    case actionTypes.LOAD_ORCS:
      return action.orcs;
    case actionTypes.FILTER_ORCS:
      return action.filteredOrcs;
    default:
      return newOrcs;
  }
}

export default filteredOrcsReducer;
