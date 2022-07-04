import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Formik, Form, Field, setNestedObjectValues } from "formik";
/* import { filterPet } from "../../../redux/actions/index"; */
import {
  ButtonFilter,
  ContainerFilter,
  Select,
  ButtonCreate,
  ButtonLink,
  Label,
  Content,
} from "./StyledPetFilters";

export default function PetFilters({ petsToFilter, stateValue }) {
  //const dispatch = useDispatch();
  const [petType, setPetType] = useState("");

  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    axios
      .get(`/breed?pet=${petType}`)
      .then((r) => setBreeds(["all"].concat(r.data))); //setBreeds(r.data))
    console.log(breeds);
  }, [petType]);

  const handleClickPetTypeBreeds = (type) => {
    setPetType(type);
  };

  return (
    <>
      <Formik
        initialValues={{state: stateValue}}
        onSubmit={(values, { resetForm }) => {
          console.log("onSubmit -->", values);
          for (let prop in values) {
            if (values[prop] === "all") {
              delete values[prop];
            }
          }          

          console.log(values);
          petsToFilter(values);
        }}
      >
        {(props) => (
          <Form>
            {console.log('stateValue',stateValue)}
            <Content>
              <ButtonLink to={"/petcreate"}>
                {stateValue.includes('adopt') && <ButtonCreate>Load Pet</ButtonCreate>}
              </ButtonLink>
              <ContainerFilter>
                <Label>Type</Label>
                <Label>
                  <Field type="radio" name="pet" value="all" /> All
                  <Field
                    type="radio"
                    name="pet"
                    value="dog"
                    onClick={() => handleClickPetTypeBreeds("dog")}
                  />{" "}
                  Dog
                  <Field
                    type="radio"
                    name="pet"
                    value="cat"
                    onClick={() => handleClickPetTypeBreeds("cat")}
                  />{" "}
                  Cat
                </Label>
              </ContainerFilter>

              <ContainerFilter>
                <Label>Breed</Label>
                <Field name="breed" as="select">
                  {breeds.length === 0 ? (
                    <option value="crossbreed">Crossbreed</option>
                  ) : (
                    breeds.map((breed) => (
                      <option value={breed} key={breed}>
                        {breed.replace(/^\w/, (c) => c.toUpperCase())}
                      </option>
                    ))
                  )}
                </Field>
              </ContainerFilter>

              <ContainerFilter>
                <Label>Gender</Label>
                <Label>
                  <Field type="radio" name="gender" value="all" /> All
                  <Field type="radio" name="gender" value="male" /> Male
                  <Field type="radio" name="gender" value="female" /> Female
                </Label>
              </ContainerFilter>

              <ContainerFilter>
                <Label>Size</Label>
                <Label>
                  <Field type="radio" name="size" value="all" /> All
                  <Field type="radio" name="size" value="small" /> Small
                  <Field type="radio" name="size" value="medium" /> Medium
                  <Field type="radio" name="size" value="big" /> Big
                </Label>
              </ContainerFilter>
              {/* <Label>State</Label>
              <Label>
                <Field type="radio" name="state" value="all" /> All
                <Field type="radio" name="state" value="adopt" /> Adopt
                <Field type="radio" name="state" value="adopted" /> adopted
                <Field type="radio" name="state" value="lost" /> Lost
                <Field type="radio" name="state" value="transit" /> Transit
              </Label> */}
              <ButtonFilter type="submit">Filter</ButtonFilter>
            </Content>
          </Form>
        )}
      </Formik>
    </>
  );
}
