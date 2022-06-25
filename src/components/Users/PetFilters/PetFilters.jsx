import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { filterPet } from "../../../redux/actions/index";

export default function PetFilters() {
  const dispatch = useDispatch();

  const handleOnClick=(values)=>{
      console.log('Valores con contenido')
      console.log(values)
     dispatch(filterPet(values)) 
}

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
            resetForm();
            console.log('elementos borrados')
            console.log(values)
           /*  dispatch(createPet(values)); */
        }}
        
      >
        {(props) => (
          <Form onClick={() => handleOnClick(props.values)}>
            {/* {console.log(props.values)} */}
            <div>
              <label>Type</label>
              <Field name="pet" as="select" onClick={props.onClick}>
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
            <button type="submit">reset</button>
          </Form>
        )}
      </Formik>
    </>
  );
}
