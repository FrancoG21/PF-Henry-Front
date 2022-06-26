import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { filterPet } from "../../../redux/actions/index";
import { ButtonFilter, ContainerFil, Select, ButtonCreate, ButtonLink, Label } from "./StyledPetFilters";

export default function PetFilters() {
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{}}
        onSubmit={(values, { resetForm }) => {
          console.log("onSubmit -->", values);
          for (let prop in values) {
            if (values[prop] === "all") {
              delete values[prop];
            }
          }
          console.log(values)
          dispatch(filterPet(values));
        }}        
      >
        {(props) => (
          <Form>
            <ButtonLink to={"/petcreate"}>
              <ButtonCreate>Load Pet</ButtonCreate>
            </ButtonLink>
            <Label>Type</Label>
              <Field name="pet" as="select">
              <option value="all">All</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
              </Field>
              <Label>Genre</Label>
              <Field name="gender" as="select">
              <option value="all">All</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Field>
              <Label>Height</Label>
              <Field name="size" as="select">
              <option value="all">All</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="big">Big</option>
              </Field>
              <Label>State</Label>
              <Field name="state" as="select">
              <option value="all">All</option>
                <option value="adopt">For adopt</option>
                <option value="adopted">Adopted</option>
                <option value="lost">Lost</option>
                <option value="transit">Transit</option>
              </Field>
            <ButtonFilter type="submit">Filter</ButtonFilter>
          </Form>
        )} 
      </Formik>
    </>
  );
}
