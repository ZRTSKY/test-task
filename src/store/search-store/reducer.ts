// @ts-nocheck
import { INPUT_VALUE, SearchActionTypes, SearchStore, SORT_VALUE } from './types';

const initState: SearchStore = {
  inputValue: '',
  sortValue: 'NONE',
};

const searchReducer = (state = initState, { type, payload }: SearchActionTypes): SearchStore => {
  switch (type) {
    case INPUT_VALUE:
      return { ...state, inputValue: payload };
    case SORT_VALUE:
      return { ...state, sortValue: payload };
    default:
      return state;
  }
};

export default searchReducer;
