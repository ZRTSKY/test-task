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

  const sortedValues = () => data.sort((a, b) => a.localeCompare(b));
  const combinedData = (reverse: boolean) =>
    dispatch(SetData({ ...other, data: reverse ? sortedValues().reverse() : sortedValues() }));

  if (value === 'A-Z') return combinedData(false);
  if (value === 'Z-A') return combinedData(true);

  return combinedData(false);
};
