export const INPUT_VALUE = 'INPUT_VALUE';
export const SORT_VALUE = 'SORT_VALUE';
export type SortVariants = 'A-Z' | 'Z-A' | 'NONE';

interface SetInputValueAction {
  type: typeof INPUT_VALUE;
  payload: string;
}

interface SetSortValueAction {
  type: typeof SORT_VALUE;
  payload: SortVariants;
}

export interface SearchStore {
  inputValue: string;
  sortValue: SortVariants;
}

export type SearchActionTypes = SetInputValueAction | SetSortValueAction;
