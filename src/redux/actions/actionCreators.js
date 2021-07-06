import axios from 'axios';
import { getOrcsByHairColor } from '../selectors/orcsSelector';
import actionTypes from './actionTypes';

const url = process.env.REACT_APP_ORCS_API;

export function loadOrcs() {
  return async (dispatch) => {
    try {
      const { data } = await axios(url);
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

export function filterOrcs(orcs, searchValue) {
  return async (dispatch) => {
    try {
      const filteredOrcs = searchValue
        ? getOrcsByHairColor(orcs, searchValue)
        : orcs;

      dispatch({
        type: actionTypes.FILTER_ORCS,
        filteredOrcs
      });
    } catch (error) {
      dispatch({
        type: actionTypes.FILTER_ORCS_ERROR
      });
    }
  };
}
