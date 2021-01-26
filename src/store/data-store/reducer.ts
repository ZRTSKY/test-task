// @ts-nocheck
import { DataStore, SetDataTypes, SET_DATA } from './types';

const initState: DataStore = {
  data: [],
  loading: false,
  error: false,
};

const dataReducer = (state = initState, { type, payload }: SetDataTypes): DataStore => {
  switch (type) {
    case SET_DATA:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default dataReducer;
