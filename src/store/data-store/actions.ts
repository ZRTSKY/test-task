import { SetDataAction, SET_DATA, ThunkResult, DataStore } from './types';
import axios from 'axios';
import { apiUrl } from 'helpers/constants';

export function SetData(payload: DataStore): SetDataAction {
  return {
    type: SET_DATA,
    payload,
  };
}

export const clearData = (): ThunkResult => (dispatch) => {
  dispatch(SetData({ data: [], error: false, loading: false }));
};

export const fetchAndFilterData = (searchValue: string): ThunkResult => async (dispatch) => {
  try {
    dispatch(SetData({ data: [], error: false, loading: true }));

    const {
      data: { body },
    } = await axios.get<{ body: string[] }>(apiUrl);

    const data: string[] = body.filter(
      (item) => item.substr(0, searchValue.length).toUpperCase().trim() === searchValue.toUpperCase().trim(),
    );

    dispatch(SetData({ data, error: false, loading: false }));
  } catch (e) {
    dispatch(SetData({ data: [], error: true, loading: false }));
  }
};
