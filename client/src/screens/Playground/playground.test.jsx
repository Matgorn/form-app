import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Playground from './Playground';

describe('<Playground />', () => {
  it('should submit form with correct values', () => {
    const fields = {
      first: 'First field',
      second: 'second@field.com',
      third: '2000-01-01'
    };

    const onSubmit = jest.fn();
    const { getByLabelText, getByText } = render(<Playground onSubmit={onSubmit} />);

    const firstFieldInput = getByLabelText('First Field');
    const secondFieldInput = getByLabelText('Second Field');
    const thirdFieldInput = getByLabelText('Third Field');
    const submitButton = getByText('Submit');

    userEvent.type(firstFieldInput, fields.first);
    userEvent.type(secondFieldInput, fields.second);
    userEvent.type(thirdFieldInput, fields.third);
    userEvent.click(submitButton);

    expect(onSubmit).toBeCalledTimes(1);
    expect(onSubmit).toBeCalledWith(fields);
  });
});
