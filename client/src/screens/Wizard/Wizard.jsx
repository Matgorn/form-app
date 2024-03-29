import { useEffect } from 'react';
import { useFormik, FormikProvider } from 'formik';
import { Outlet, useNavigate } from 'react-router';
import { Paper } from '@material-ui/core';
import * as yup from 'yup';

const validationSchema = yup.object({
  firstQuestion: yup.string('Enter some answer').required('This field is required'),
  adresses: yup.array().of(
    yup.object({
      city: yup.string().required('City is required'),
      zipCode: yup.number().typeError('It must be a number').required('Zip code is required'),
      street: yup.string().required('Street is required')
    })
  ),
  secondQuestion: yup.string('Enter some answer').required('This field is required'),
  thirdQuestion: yup.string('Enter some answer').required('This field is required'),
  newsletter: yup.boolean().required('This field is required'),
  // .oneOf([true], 'This agreement must be accepted.'),
  birthDate: yup
    .date()
    .required('Birth date is required')
    .when('newsletter', (newsletter) => {
      if (newsletter) {
        return yup.date().required().max('2001-01-01');
      }
    })
});

const Wizard = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    onSubmit: (values) => console.log(values),
    initialValues: {
      firstQuestion: '',
      secondQuestion: '',
      thirdQuestion: '',
      birthDate: '',
      newsletter: false,
      adresses: [
        {
          city: '',
          zipCode: '',
          street: ''
        }
      ]
    },
    validationSchema,
    validateOnMount: true
  });

  useEffect(() => {
    navigate('first');
  }, []);

  return (
    <FormikProvider value={formik}>
      <h1>Form</h1>
      <Paper>
        <form onSubmit={formik.handleSubmit}>
          <Outlet />
        </form>
      </Paper>
    </FormikProvider>
  );
};

export default Wizard;
