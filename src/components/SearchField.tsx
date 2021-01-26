import React, { ChangeEvent, FC } from 'react';
import { TextField } from '@material-ui/core';

interface SearchFieldProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchField: FC<SearchFieldProps> = ({ value, onChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value ?? '');
  };

  return <TextField placeholder="Search Names ..." value={value} onChange={handleChange} variant="outlined" />;
};

export default SearchField;
