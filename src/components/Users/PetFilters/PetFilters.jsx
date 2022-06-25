import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { filterPet } from "../../../redux/actions/index";

export default function PetFilters() {
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(false);

  const handleOnClick = (values) => {
    console.log("handleOnClick");
   
  };

  return (
    <>
      <Formik
        initialValues={{
          pet: "",
          gender: "",
          size: "",
          state: "",
        }}

        onSubmit={(values, { resetForm }) => {
          console.log('onSubmit -->',values);
          dispatch(filterPet(values));
          /* resetForm(); */
        }}
      >
        {(props) => (
          <Form>
            <div>
              <label>Type</label>
              <Field name="pet" as="select">
                <option value="dog">dog</option>
                <option value="cat">cat</option>
              </Field>
            </div>
            <div>
              <label>Gender</label>
              <Field name="gender" as="select">
                <option value="male">male</option>
                <option value="female">female</option>
              </Field>
            </div>
            <div>
              <label>Size</label>
              <Field name="size" as="select">
                <option value="small">small</option>
                <option value="medium">medium</option>
                <option value="big">big</option>
              </Field>
            </div>
            <div>
              <label>State</label>
              <Field name="state" as="select">
                <option value="adopt">adopt</option>
                <option value="adopted">adopted</option>
                <option value="lost">lost</option>
                <option value="transit">transit</option>
              </Field>
            </div>
            <button type="submit">filter</button>
          </Form>
        )} 
      </Formik>
      
    </>
  );
}
