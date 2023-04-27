import * as yup from "yup";
import { Form, Formik } from "formik";
import React, { useState } from "react";
interface propsclient {
  guardar: () => void;
}
const FormContact = ({ guardar }: propsclient) => {
  const createclient = yup.object({
    name: yup.string().required(),
    age: yup.number().required().positive().integer(),
    email: yup.string().email(),
  });

  return (
    <Formik
      initialValues={{ name: "", age: "", email: "" }}
      validationSchema={createclient}
      onSubmit={(values, { resetForm }) => {
        console.log(values), resetForm();
      }}
    >
      {(formik) => (
        <Form>
          <input
            onChange={guardar}
            name="name"
            type="text"
            placeholder="Add name"
          />
          <input name="age" type="number" placeholder="Please add a age" />
          <input name="email" type="email" placeholder="email" />
          <button>Enviar mensaje</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormContact;
