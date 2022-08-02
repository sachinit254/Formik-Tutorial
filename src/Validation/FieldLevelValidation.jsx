import React from "react";
import { Field, Form, Formik } from "formik";

const validateEmail = (value) => {
  let error;
  if (!value) {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
};

const validateUsername = (value) => {
  let error;
  if (value === "admin") {
    error = "Nice try!";
  }
  return error;
};

const FieldLevelValidation = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{ username: "", email: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched, isValidating }) => (
        <Form>
          <Field name="email" placeholder="email" validate={validateEmail} />
          {errors.email && touched.email && <div>{errors.email}</div>}
          <Field
            name="username"
            validate={validateUsername}
            placeholder="username"
          />
          {errors.username && touched.username && <div>{errors.username}</div>}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default FieldLevelValidation;
