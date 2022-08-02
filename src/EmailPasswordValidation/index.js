import { Formik, Form, Field, ErrorMessage } from "formik";
const Main = () => {
    return (
        <div>
            <h1 className="flexCenter">Any place in your app!</h1>
            <Formik
                initialValues={{ email: "", password: "" }}
                validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = "Required";
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = "Invalid email address";
                    }
                    if (!values.password) {
                        errors.password = "Required";
                    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(values.password)){
                      errors.password = "Invalid"   
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="flexColumn">
                        <Field type="email" name="email" placeholder="email" />
                        <ErrorMessage name="email" component="div" />
                        <Field type="password" name="password" placeholder="password" />
                        <ErrorMessage name="password" component="div" />
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Main;
