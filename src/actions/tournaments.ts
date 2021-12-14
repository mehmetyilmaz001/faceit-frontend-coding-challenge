import { API_TOURNAMENTS_URL } from './../constants/api';
import { actionTypes } from './constants';
import { RootState } from '../reducers';

// getTournaments from api and dispatch action to store
export const getTournaments = () => async (
  dispatch: any,
  getState: () => RootState
) => {
  dispatch({
    type: actionTypes.SET_LOADING,
    payload: true
  });

  const response = await fetch(API_TOURNAMENTS_URL);
  const tournaments = await response.json();

  dispatch({
    type: actionTypes.GET_TOURNAMENTS,
    payload: tournaments
  });

  dispatch({
    type: actionTypes.SET_LOADING,
    payload: false
  });
};
