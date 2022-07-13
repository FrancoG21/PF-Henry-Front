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
  AllContainer,
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
    <AllContainer>
      <Formik
        initialValues={{ state: stateValue}}
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
            {console.log('stateValue', stateValue)}
            <ContainerFilter>
              <Label>Tipo</Label>
              <Label>
                <Field type="radio" name="pet" value="all" /> Todos
                <Field
                  type="radio"
                  name="pet"
                  value="dog"
                  onClick={() => handleClickPetTypeBreeds("dog")}
                />{" "}
                Perro/a
                <Field
                  type="radio"
                  name="pet"
                  value="cat"
                  onClick={() => handleClickPetTypeBreeds("cat")}
                />{" "}
                Gato/a
              </Label>
            </ContainerFilter>

            <ContainerFilter>
              <Label>Raza</Label>
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
              <Label>Genero</Label>
              <Label>
                <Field type="radio" name="gender" value="all" /> Todos
                <Field type="radio" name="gender" value="male" /> Masculino
                <Field type="radio" name="gender" value="female" /> Femenino
              </Label>
            </ContainerFilter>

            <ContainerFilter>
              <Label>Tamaño</Label>
              <Label>
                <Field type="radio" name="size" value="all" /> Todos
                <Field type="radio" name="size" value="small" /> Pequeño
                <Field type="radio" name="size" value="medium" /> Mediano
                <Field type="radio" name="size" value="big" /> Grande
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
            <ButtonFilter type="submit">Filtrar</ButtonFilter>
            <ButtonLink to={"/petcreate"}>
              {stateValue.includes('adopt') && <ButtonCreate>Cargar Animal</ButtonCreate>}
            </ButtonLink>
          </Form>
        )}
      </Formik>
    </AllContainer>
  );
}
