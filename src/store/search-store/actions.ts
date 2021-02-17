import { INPUT_VALUE, SearchActionTypes, SortVariants, SORT_VALUE } from './types';
import { ThunkResult } from 'store/data-store/types';
import { RootState } from 'store/reducer';
import { SetData } from 'store/data-store/actions';

export function SetInputValue(inputValue: string): SearchActionTypes {
  return {
    type: INPUT_VALUE,
    payload: inputValue,
  };
}

export function SetSortValue(sortValue: SortVariants): SearchActionTypes {
  return {
    type: SORT_VALUE,
    payload: sortValue,
  };
}

export const sortValues = (value: SortVariants): ThunkResult => (dispatch, getState) => {
  dispatch(SetSortValue(value));
  const {
    dataStore: { data, ...other },
  }: RootState = getState();

  const sortedValues = (isReverse: boolean): string[] =>
    data.sort((a, b) => (isReverse ? a.localeCompare(b) : b.localeCompare(a)));

  dispatch(SetData({ ...other, data: sortedValues(value === 'A-Z') }));
};
