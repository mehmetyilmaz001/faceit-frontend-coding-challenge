import { actionTypes } from './../actions/constants';
import { Tournement } from '../features/tournement-management/types';

interface IState {
  rawList: Tournement[];
  list: Tournement[];
  loading: boolean;
  hasError: boolean;
}

const initialState: IState = {
  rawList: [],
  list: [],
  loading: false,
  hasError: false
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
      const list = action.payload;
      return { ...state, list, rawList: list, hasError: list.length === 0 };

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
      return { ...state, list: updatedList, rawList: updatedList };

    case actionTypes.DELETE_TOURNAMENT:
      const newList = state.list.filter(t => t.id !== action.payload);
      return { ...state, list: newList, rawList: newList };

    case actionTypes.SEARCH_TOURNAMENT:
      const searchTerm = action.payload as string;

      const searchedList =
        searchTerm.length === 0
          ? state.rawList
          : state.list.filter(t =>
              t.name.toLowerCase().includes(searchTerm.toLowerCase())
            );

      return {
        ...state,
        list: searchedList,
        hasError: searchedList.length === 0
      };

    default:
      return state;
  }
}
