import { useDispatch } from 'react-redux';
// import { useState } from 'react';

import { Formik } from 'formik';

import { schemaRegValidation } from 'utils/formValidation';
import { getValidColor } from 'utils/getValidColor';
import { register } from '../../redux/auth/auth-operations';
import {
  FormAuth,
  TitleForm,
  BoxForForm,
  BoxForField,
  FormField,
  Button,
  Warning,
  LinkTo,
} from './RegisterForm.styled';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    const authData = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    dispatch(register(authData));
    actions.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schemaRegValidation}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <FormAuth>
            <TitleForm>Registration</TitleForm>
            <BoxForForm>
              <BoxForField>
                <FormField
                  type="text"
                  name="name"
                  placeholder="Name"
                  color={getValidColor(errors.name, touched.name)}
                />
                {errors.name && touched.name ? (
                  <Warning color={getValidColor(errors.name, touched.name)}>
                    {errors.name}
                  </Warning>
                ) : null}
              </BoxForField>
              <BoxForField>
                <FormField
                  type="email"
                  name="email"
                  placeholder="Email"
                  color={getValidColor(errors.email, touched.email)}
                />
                {errors.email && touched.email ? (
                  <Warning color={getValidColor(errors.email, touched.email)}>
                    {errors.email}
                  </Warning>
                ) : null}
              </BoxForField>
              <BoxForField>
                <FormField
                  type="password"
                  name="password"
                  placeholder="Password"
                  color={getValidColor(errors.password, touched.password)}
                />
                {errors.password && touched.password ? (
                  <Warning
                    color={getValidColor(errors.password, touched.password)}
                  >
                    {errors.password}
                  </Warning>
                ) : null}
              </BoxForField>
            </BoxForForm>
            <Button type="submit">Sign up</Button>
          </FormAuth>
        )}
      </Formik>
      <LinkTo to="/signin">Sign in</LinkTo>
    </div>
  );
};
