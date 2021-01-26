import React, { useEffect } from 'react';
import { Box, Container, CssBaseline, ThemeProvider, withStyles } from '@material-ui/core';
import { ListSection, SearchSection } from '../src/containers';
import { useLocation } from 'react-router-dom';
// @ts-ignore
import { parse } from 'query-string';

import theme from './helpers/theme';
import { fetchAndFilterData } from 'store/data-store/actions';
import { useDispatch } from 'react-redux';

const StyledContainer = withStyles(() => ({
  root: {
    marginTop: '10vh',
  },
}))(Container);

function App(): JSX.Element {
  const { search } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const parsed = parse(search);
    if (parsed.search) {
      dispatch(fetchAndFilterData(parsed.search));
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledContainer>
        <SearchSection />
        <Box marginTop={5} />
        <ListSection />
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
