import { actionTypes } from './../actions/constants';
import { Tournement } from '../features/tournement-management/types';

interface IState {
  list: Tournement[];
  loading: boolean;
}

const initialState: IState = {
  list: [],
  loading: false
};

export default function tournaments(
  state: IState = initialState,
  action: { type: string; payload: any }
) {
  console.log('action', action);

  switch (action.type) {
    case actionTypes.SET_LOADING:
      return { ...state, loading: action.payload };

    case actionTypes.GET_TOURNAMENTS:
      return { ...state, list: action.payload };

    default:
      return state;
  }
}
