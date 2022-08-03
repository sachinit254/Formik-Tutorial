import React from "react";
import { Formik, Form, Field } from "formik";
const NestedExample = () => (
  <div>
    <h1>Social Profiles</h1>
    <Formik
      initialValues={{ social: { facebook: "", twitter: "" } }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, errors }) => (
        <Form>
          <Field name="social.facebook" />
          <Field name="social.twitter" />
          <button type="submit">Submit</button>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  </div>
);

export default NestedExample;
