export const getValidDateFormat = (date) => new Date(date).toISOString().split('T')[0];
