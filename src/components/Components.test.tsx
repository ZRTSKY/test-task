import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import SearchButton from './SearchButton';
import SearchField from './SearchField';

describe('Test All Components', () => {
  const handleClick = jest.fn();
  const handleChange = jest.fn();

  test('Test Search Button', () => {
    render(<SearchButton onClick={handleClick}>test</SearchButton>);
    fireEvent.click(screen.getByText(/test/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('Test Search Field', () => {
    render(<SearchField onChange={handleChange} value={'test'} />);

    expect(screen.getByDisplayValue(/test/i)).toBeDefined();
  });
});
