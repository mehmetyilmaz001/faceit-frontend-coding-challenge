import { Tournament } from './../features/tournement-management/types';
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

    if (response.status === 200) {
      dispatch({
        type: actionTypes.GET_TOURNAMENTS,
        payload: tournaments
      });
    } else {
      dispatch({
        type: actionTypes.SET_HAS_ERROR,
        payload: true
      });
    }
  } catch (error) {
    console.log('getTournaments error', error);

    dispatch({
      type: actionTypes.SET_HAS_ERROR,
      payload: true
    });
  } finally {
    dispatch({
      type: actionTypes.SET_LOADING,
      payload: false
    });
  }
};

export const createTournament = (newTournamentName: string) => async (
  dispatch: any
) => {
  const response = await fetch(API_TOURNAMENTS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: newTournamentName })
  });
  const createResponse = await response.json();

  if (response.ok && createResponse)
    dispatch({
      type: actionTypes.CREATE_TOURNAMENT,
      payload: createResponse
    });
};

export const updateTournament = (tournament: Tournament) => async (
  dispatch: any
) => {
  const response = await fetch(`${API_TOURNAMENTS_URL}/${tournament.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(tournament)
  });
  const updateResponse = await response.json();
  if (response.ok && updateResponse) {
    dispatch({
      type: actionTypes.UPDATE_TOURNAMENT,
      payload: updateResponse
    });
  }
};
export const deleteTournament = (id: string) => async (dispatch: any) => {
  const response = await fetch(`${API_TOURNAMENTS_URL}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  });
  await response.json();
  if (response.ok) {
    dispatch({
      type: actionTypes.DELETE_TOURNAMENT,
      payload: id
    });
  }
};

export const searchTournament = (search: string) => async (dispatch: any) => {
  dispatch({
    type: actionTypes.SET_LOADING,
    payload: true
  });

  setTimeout(() => {
    dispatch({
      type: actionTypes.SEARCH_TOURNAMENT,
      payload: search
    });

    dispatch({
      type: actionTypes.SET_LOADING,
      payload: false
    });
  }, 1000);
};
