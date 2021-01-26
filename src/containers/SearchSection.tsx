import React, { FC } from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { SearchField, SearchButton, SortSelect } from '../components';
import { INPUT_VALUE, SortVariants } from 'store/search-store/types';
import { RootState } from 'store/reducer';
import { clearData, fetchAndFilterData } from 'store/data-store/actions';
import { TItems } from 'components/SortSelect';
import { sortValues } from 'store/search-store/actions';
import { useHistory } from 'react-router-dom';
// @ts-ignore
import { stringify } from 'query-string';

interface ISortItems extends TItems {
  value: SortVariants;
}

const sortItems: ISortItems[] = [
  {
    label: 'None',
    value: 'NONE',
  },
  {
    label: 'A-Z',
    value: 'A-Z',
  },
  {
    label: 'Z-A',
    value: 'Z-A',
  },
];

const SearchSection: FC = () => {
  const {
    dataStore: { data, error, loading },
    searchStore: { inputValue, sortValue },
  } = useSelector((state: RootState) => state);

  const dispatch = useDispatch();
  const { push } = useHistory();

  const isCorrectSortItem = (value: string): SortVariants => (value === 'A-Z' || value === 'Z-A' ? value : 'NONE');

  const handleInputChange = (value: string) => {
    push(`/?${stringify({ search: value })}`);
    dispatch({ type: INPUT_VALUE, payload: value });
  };

  const handleClearData = () => {
    push('/');
    dispatch(clearData());
  };

  const handleRequest = () => dispatch(fetchAndFilterData(inputValue));
  const handleSelectChange = (value: string) => dispatch(sortValues(isCorrectSortItem(value)));

  const isDataExists = data.length && !error && !loading;

  return (
    <Grid spacing={3} container>
      <Grid item>
        <SearchField value={inputValue} onChange={handleInputChange} />
      </Grid>
      <Grid item>
        <SearchButton onClick={handleRequest}>Search</SearchButton>
      </Grid>
      <Grid item>
        <SearchButton disabled={!isDataExists} color={'secondary'} onClick={handleClearData}>
          Clear
        </SearchButton>
      </Grid>
      <Grid item>
        <SortSelect
          disabled={!isDataExists}
          value={sortValue}
          items={sortItems}
          onChange={handleSelectChange}
          label={'Sort'}
        />
      </Grid>
    </Grid>
  );
};

export default SearchSection;
