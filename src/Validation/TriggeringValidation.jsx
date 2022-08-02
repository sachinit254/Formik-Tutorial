import React from "react";
import { Formik, Form, Field } from "formik";

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
  if (!value) {
    error = "Required";
  } else if (value === "admin") {
    error = "Nice try!";
  }
  return error;
};

export const TriggeringValidation = () => (
  <div>
    <h1 className="flexCenter">Signup</h1>
    <Formik
      validateOnBlur={false}
      validateOnChange={false}
      initialValues={{
        username: "",
        email: "",
      }}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched, validateField, validateForm }) => (
        <Form className="flexColumn">
          <Field name="email" validate={validateEmail} />
          {errors.email && <div>{errors.email}</div>}

          <Field name="username" validate={validateUsername} />
          {errors.username && <div>{errors.username}</div>}
          {/** Trigger field-level validation
           imperatively */}
          <button type="button" onClick={() => validateField("username")}>
            Check Username
          </button>
          {/** Trigger form-level validation
           imperatively */}
          <button
            type="button"
            onClick={() => validateForm().then(() => console.log("blah"))}
          >
            Validate All
          </button>
          <button type="submit">Submit</button>
          <pre>{JSON.stringify(errors, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  </div>
);

export default TriggeringValidation;
