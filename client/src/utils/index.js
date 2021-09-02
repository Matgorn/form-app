import { createEvent } from '../api';

export const onSubmit = async ({ values, setShowSuccessMessage, setUpdateEvents }) => {
  try {
    const result = await createEvent(values);

    if (result.status === 201) {
      setShowSuccessMessage(true);
      setUpdateEvents(true);

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    }
  } catch (err) {
    const errorMessages = err.response.data.errors;
    return Object.keys(err.response.data.errors).reduce((errors, field) => errorMessages[field] ? { ...errors, [field]: errorMessages[field] } : errors, {});
  }
};
