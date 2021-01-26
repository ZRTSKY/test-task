import React, { ChangeEvent, FC } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export type TItems = {
  value: string;
  label: string;
};

interface SortSelectProps {
  items: TItems[];
  onChange: (value: string) => void;
  value: string;
  label: string;
  disabled: boolean;
}

const SortSelect: FC<SortSelectProps> = ({ items, onChange, value, label, disabled }) => {
  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };

  return (
    <FormControl variant="outlined" disabled={disabled}>
      <InputLabel id="outlined-label">{label}</InputLabel>
      <Select labelId="outlined-label" id="select-outlined" value={value} onChange={handleChange} label="Sort">
        {items.map(({ label, value }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SortSelect;
