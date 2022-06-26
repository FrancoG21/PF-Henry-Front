import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { filterPet } from "../../../redux/actions/index";
import { ButtonFilter, ContainerFil, Select, ButtonCreate, ButtonLink } from "./StyledPetFilters";

export default function PetFilters() {
  const dispatch = useDispatch();

  const handleOnClick = (values) => {
    console.log("handleOnClick");
  };

  return (
    <>
      <Formik
        initialValues={{}}
        onSubmit={(values, { resetForm }) => {
          console.log("onSubmit -->", values.pet);
          for (let prop in values) {
            if (values[prop] === "all") {
              delete values[prop];
            }
          }
          dispatch(filterPet(values));
          /* resetForm(); */
        }}
      >
        {(props) => (
          <ContainerFil>
            <ButtonLink to={"/petcreate"}>
              <ButtonCreate>Load Pet</ButtonCreate>
            </ButtonLink>
              <Select name="pet" as="select">
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
              </Select>
              <Select name="gender" as="select">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Select>
              <Select name="size" as="select">
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="big">Big</option>
              </Select>
              <Select name="state" as="select">
                <option value="adopt">Adopt</option>
                <option value="adopted">Adopted</option>
                <option value="lost">Lost</option>
                <option value="transit">Transit</option>
              </Select>
            <ButtonFilter type="submit">Filter</ButtonFilter>
          </ContainerFil>
        )} 
      </Formik>
    </>
  );
}
