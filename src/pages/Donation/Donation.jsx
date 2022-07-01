import { Form, Formik, Field } from "formik";
import React from "react";
import axios from "axios";
import { useState } from "react";
import Classes from './Donation.module.css';


export default function Donation() {
  const [url, setUrl] = useState("");

  return (
    <>
      <Formik
        initialValues={{ amount: 200 }}
        onSubmit={(values) => {
          axios.post('/payment', {
            unit_price: Number(values.amount),
            failure: 'http://localhost:3000/donation/failure',
            success: 'http://localhost:3000/donation/success'
          }).then(r => setUrl(r.data.url))
        }}
      >
        <Form>
          <div className={Classes.container}>
            <label htmlFor="dona">AQUI PUEDES DONAR!</label>
            <label htmlFor="cantidad">Valor a donar</label>
            <Field name="amount" type="text" />
            <button type="submit">Donar</button>
          </div>
        </Form>
      </Formik>
      {
        url && window.location.replace(url)
      }
    </>
  );
}