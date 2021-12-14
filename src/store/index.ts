import { createStore, applyMiddleware, Action } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import rootReducer from '../reducers';

const store: any = createStore(rootReducer, applyMiddleware(thunk));

export type Store = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, Store, null, Action<string>>;

export default store;
