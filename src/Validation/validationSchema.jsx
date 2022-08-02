import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const schema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const ValidationSchemaExample = () => {
  return (
    <div>
      <h1 className="flexCenter">Signup</h1>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched, values }) => (
          <Form className="flexColumn">
            <Field name="firstName" placeholder="first name" />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <Field name="lastName" placeholder="last name" />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
            <Field name="email" type="email" placeholder="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <button type="submit">Submit</button>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ValidationSchemaExample;
