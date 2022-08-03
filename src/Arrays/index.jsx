import { Formik, Form, Field } from "formik";
import React from "react";

const ArrayExample = () => (
  <div>
    <h1>Friends</h1>
    <Formik
      initialValues={{ friends: ["jared", "ian"] }}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <Field name="friends[0]" />
        <Field name="friends[1]" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

export default ArrayExample;
