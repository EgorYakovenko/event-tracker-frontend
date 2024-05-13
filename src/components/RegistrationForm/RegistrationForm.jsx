import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';

export function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        dateOfBirth: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Name
          <Field type="text" name="name" />
        </label>
        <label>
          Email
          <Field type="email" name="email" />
        </label>
        <label>
          Date of birth
          <Field type="date" name="date" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
