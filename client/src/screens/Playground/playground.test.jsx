import { render, fireEvent } from '@testing-library/react';
import Playground from './Playground';

describe('<Playground />', () => {
  it('should submit form with correct values', () => {
    const fields = {
      first: 'First field',
      second: 'second@field.com',
      third: '2000-01-01'
    };

    const onSubmit = jest.fn();
    const { getByLabelText, getByText } = render(<Playground />);

    const firstFieldInput = getByLabelText('First Field');
    const secondFieldInput = getByLabelText('Second Field');
    const thirdFieldInput = getByLabelText('Third Field');
    const submitButton = getByText('Submit');

    fireEvent.change(firstFieldInput, { target: { value: fields.first } });
    fireEvent.change(secondFieldInput, { target: { value: fields.second } });
    fireEvent.change(thirdFieldInput, { target: { value: fields.third } });
    fireEvent.click(submitButton);

    expect(onSubmit).toBeCalledTimes(1);
    expect(onSubmit).toBeCalledWith(fields);
  });
});
