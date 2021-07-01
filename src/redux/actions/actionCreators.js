import axios from 'axios';
import actionTypes from './actionTypes';

const url = process.env.REACT_APP_ORCS_API;

export default function loadOrcs() {
  return async (dispatch) => {
    try {
      console.log('entro', url);
      const { data } = await axios(url);
      console.log(data);
      dispatch({
        type: actionTypes.LOAD_ORCS,
        orcs: data.Brastlewark
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_ORCS_ERROR
      });
    }
  };
}
