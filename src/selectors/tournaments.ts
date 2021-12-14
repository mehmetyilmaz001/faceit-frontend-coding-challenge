import { RootState } from './../reducers/index';
// import store from '../store';
// export const tournaments = (s: RootState) => s.tournaments.list;
// export const list = (s: RootState) => s.tournaments.list;

export const tournamentsSelector = (s: RootState) => s.tournaments;
