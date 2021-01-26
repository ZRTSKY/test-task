import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducer';

export const SET_DATA = 'SET_DATA';
export const CLEAR_DATA = 'CLEAR_DATA';

export interface SetDataAction {
  type: typeof SET_DATA;
  payload: DataStore;
}

export interface ClearDataAction {
  type: typeof CLEAR_DATA;
  payload: DataStore;
}

export interface DataStore {
  data: string[];
  loading: boolean;
  error: boolean;
}

export type ThunkResult = ThunkAction<void, RootState, unknown, Action<string>>;

export type SetDataTypes = SetDataAction | ClearDataAction;
