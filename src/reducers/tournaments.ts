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

    case actionTypes.CREATE_TOURNAMENT:
      return { ...state, list: [...state.list, action.payload] };

    case actionTypes.UPDATE_TOURNAMENT:
      const updatedItem = action.payload as Tournement;
      const updatedList = state.list.map(t => {
        if (t.id === updatedItem.id) {
          return {
            ...t,
            name: updatedItem.name
          };
        }
        return t;
      });
      return { ...state, list: updatedList };

    case actionTypes.DELETE_TOURNAMENT:
      const newList = state.list.filter(t => t.id !== action.payload);
      return { ...state, list: newList };

    default:
      return state;
  }
}
