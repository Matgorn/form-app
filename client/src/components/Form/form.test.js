import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import Form, { onSubmit } from './Form.jsx';

const getInputs = (container) => {
  const firstName = container.querySelector('input[name="firstName"]');
  const lastName = container.querySelector('input[name="lastName"]');
  const eMail = container.querySelector('input[name="eMail"]');
  const eventDate = container.querySelector('input[name="eventDate"]');
  const resetButton = container.querySelector('.reset-button');
  const submit = container.querySelector('.MuiButton-containedPrimary');

  return { firstName, lastName, eMail, eventDate, resetButton, submit };
};

const fillInputs = async ({ firstName, lastName, eMail, eventDate }) => {
  await waitFor(() => {
    fireEvent.change(firstName, {
      target: {
        value: 'testName'
      }
    });
  });

  await waitFor(() => {
    fireEvent.change(lastName, {
      target: {
        value: 'testLastName'
      }
    });
  });

  await waitFor(() => {
    fireEvent.change(eMail, {
      target: {
        value: 'testMail@mail.com'
      }
    });
  });

  await waitFor(() => {
    fireEvent.change(eventDate, {
      target: {
        value: '2000-01-01'
      }
    });
  });
};

describe('Form component working correctly', () => {
  test('Shows error message if submitted with no values', async () => {
    const { container } = render(<Form />);

    const submit = container.querySelector('.MuiButton-containedPrimary');
    const errorMsg = container.querySelector('.Mui-error');
    expect(container.contains(errorMsg)).toBe(false);

    await waitFor(() => {
      fireEvent.click(submit);
    });

    const errorMessageAfterSubmit = container.querySelector('.Mui-error');
    const errorMessageDisplayProp = window.getComputedStyle(errorMessageAfterSubmit);
    expect(errorMessageDisplayProp).toHaveProperty('display', 'block');
    expect(container.contains(errorMessageAfterSubmit)).toBe(true);
  });

  test('Reset button to be disabled without values', (done) => {
    const { container } = render(<Form />);
    const resetButton = container.querySelector('.MuiButton-containedSecondary');

    expect(resetButton).toHaveProperty('disabled', true);
    done();
  });

  test('Reset button to be enabled with first field fill', async (done) => {
    const { container } = render(<Form />);
    const { resetButton, firstName } = getInputs(container);

    await waitFor(() => {
      fireEvent.change(firstName, {
        target: {
          value: 'testName'
        }
      });
    });

    expect(resetButton).toHaveProperty('disabled', false);
    done();
  });

  test('Shows error message after field touch', async (done) => {
    const { container } = render(<Form />);
    const firstNameContainer = container.querySelector('.MuiFormControl-root');
    const errorMessage = firstNameContainer.querySelector('.Mui-error');
    const input = firstNameContainer.querySelector('input[name="firstName"]');

    expect(container.contains(errorMessage)).toBe(false);

    await waitFor(() => {
      fireEvent.focus(input);
    });

    await waitFor(() => {
      fireEvent.blur(input);
    });

    const errorMessageAfterTouch = firstNameContainer.querySelector('.Mui-error');

    expect(container.contains(errorMessageAfterTouch)).toBe(true);
    done();
  });

  test('Shows success message and no errors if submitted with valid values', async (done) => {
    const onSubmit = jest.fn();
    const { container } = render(<Form onSubmit={onSubmit} />);
    const successMessage = container.querySelector('.success-message');
    const { firstName, lastName, eMail, eventDate, submit } = getInputs(container);

    expect(container.querySelector('.Mui-error')).toBeNull();
    expect(container.contains(successMessage)).toBe(false);

    await fillInputs({ firstName, lastName, eMail, eventDate });

    await waitFor(() => {
      fireEvent.click(submit);
    });

    expect(onSubmit).toHaveBeenCalled();
    done();
  });

  test('Reset button clears all fields', async (done) => {
    const { container } = render(<Form onSubmit={onSubmit} />);
    const { firstName, lastName, eMail, eventDate, resetButton } = getInputs(container);

    await fillInputs({ firstName, lastName, eMail, eventDate });

    expect(firstName.value).toEqual('testName');
    expect(lastName.value).toEqual('testLastName');
    expect(eMail.value).toEqual('testMail@mail.com');
    expect(eventDate.value).toEqual('2000-01-01');

    await waitFor(() => {
      fireEvent.click(resetButton);
    });

    expect(firstName.value).toEqual('');
    expect(lastName.value).toEqual('');
    expect(eMail.value).toEqual('');
    expect(eventDate.value).toEqual('');
    done();
  });
});
