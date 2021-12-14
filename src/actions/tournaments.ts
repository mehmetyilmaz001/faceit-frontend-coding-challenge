import { Tournement } from './../features/tournement-management/types';
import { API_TOURNAMENTS_URL } from './../constants/api';
import { actionTypes } from './constants';

// getTournaments from api and dispatch action to store
export const getTournaments = () => async (dispatch: any) => {
  try {
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
  } catch (error) {
    dispatch({
      type: actionTypes.GET_TOURNAMENTS,
      payload: []
    });
  } finally {
    dispatch({
      type: actionTypes.SET_LOADING,
      payload: false
    });
  }
};

export const updateTournament = (tournament: Tournement) => {
  return {
    type: actionTypes.UPDATE_TOURNAMENT,
    payload: tournament
  };
};

export const deleteTournament = (id: string) => {
  return {
    type: actionTypes.DELETE_TOURNAMENT,
    payload: id
  };
};
