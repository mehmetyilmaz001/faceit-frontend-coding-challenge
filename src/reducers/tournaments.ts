import { actionTypes } from './../actions/constants';
import { Tournament } from '../features/tournement-management/types';

interface IState {
  _rawList: Tournament[];
  list: Tournament[];
  loading: boolean;
  hasError: boolean;
}

const initialState: IState = {
  _rawList: [],
  list: [],
  loading: false,
  hasError: false
};

export default function tournaments(
  state: IState = initialState,
  action: { type: string; payload: any }
) {
  console.log('action', action);

  const hasSearch = state.list.length !== state._rawList.length;

  switch (action.type) {
    case actionTypes.SET_HAS_ERROR:
      return { ...state, hasError: action.payload };

    case actionTypes.SET_LOADING:
      return { ...state, loading: action.payload };

    case actionTypes.GET_TOURNAMENTS:
      const list = action.payload;
      return { ...state, list, _rawList: list, hasError: list.length === 0 };

    case actionTypes.CREATE_TOURNAMENT:
      const rawListAfterCreate = [...state._rawList];
      rawListAfterCreate.unshift(action.payload);

      let listAfterCreate = [...rawListAfterCreate];
      if (hasSearch) {
        listAfterCreate = [...state.list];
        listAfterCreate.unshift(action.payload);
      }

      console.log('rawListAfterCreate', rawListAfterCreate);

      return { ...state, list: listAfterCreate, _rawList: rawListAfterCreate };

    case actionTypes.UPDATE_TOURNAMENT:
      const updateItem = (t: Tournament) => {
        const updatedItem = action.payload as Tournament;
        if (t.id === updatedItem.id) {
          return {
            ...t,
            name: updatedItem.name
          };
        }
        return t;
      };

      const rawListAfterUpdate = state._rawList.map(updateItem);

      let listAfterUpdate = [...rawListAfterUpdate];
      if (hasSearch) {
        listAfterUpdate = state.list.map(updateItem);
      }
      return { ...state, list: listAfterUpdate, rawList: rawListAfterUpdate };

    case actionTypes.DELETE_TOURNAMENT:
      const deleteItem = (t: Tournament) => t.id !== action.payload;

      const rawListAfterDelete = state._rawList.filter(deleteItem);

      let listAfterDelete = [...rawListAfterDelete];
      if (hasSearch) {
        listAfterDelete = state.list.filter(deleteItem);
      }

      return { ...state, list: listAfterDelete, _rawList: rawListAfterDelete };

    case actionTypes.SEARCH_TOURNAMENT:
      const searchTerm = action.payload as string;

      const searchedList =
        searchTerm.length === 0
          ? state._rawList
          : state.list.filter(
              t => t.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
            );

      return {
        ...state,
        list: searchedList
      };

    default:
      return state;
  }
}
