import actionTypes from '../actions/actionTypes';

function orcsReducer(orcs = [], action) {
  const newOrcs = [...orcs];
  if (action.type === actionTypes.LOAD_ORCS) {
    return action.orcs;
  }
  return newOrcs;
}

export default orcsReducer;
