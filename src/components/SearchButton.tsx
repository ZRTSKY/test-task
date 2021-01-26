import React, { FC, ReactNode } from 'react';
import { Button, ButtonProps, withStyles } from '@material-ui/core';

interface SearchButtonProps extends ButtonProps {
  children: ReactNode | string;
}

const StyledButton = withStyles(() => ({
  root: {
    height: '100%',
  },
}))(Button);

const SearchButton: FC<SearchButtonProps> = ({ children, ...props }) => {
  return (
    <StyledButton {...props} fullWidth variant="contained">
      {children}
    </StyledButton>
  );
};

export default SearchButton;
