import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { createPet } from "../../../redux/actions/index";

import {
  ContainerCamp,
  FormContainer,
  Camp,
  TitleForm,
  Label,
  Input,
  Forms,
  Select,
  ButtonSubmit,
  ContainerButton,
} from "./StyledPetCreate";
/* import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom' */

export default function PetCreate() {
  //minuto 42:40 video usa form, field, etc
  // 47:28 con que otros tags se puede trabajar ??

  const dispatch = useDispatch();
  const [flag, setFlag] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          name: "", //string 255 caracteres
          pet: "", // cat or dog
          image: "", //string 255 caracteres
          size: "", // small, medium, big
          weight: "", //
          fur: "", // short or long
          breed: "crossbreed", // crossbreed
          gender: "", // female or male
          castration: false, // true or false
          vaccinate: false, // true or false
        }}
        validate={(values) => {
          let errors = {};
          if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
            errors.name = "Name only alows letters and blank space";
          }
          if (!values.name) {
            errors.name = "Name is required";
          }
          if (values.weight < 0) {
            errors.weight = "Must be number > 0";
          }
          if (!values.fur) {
            errors.fur = "Fur is required";
          }
          if (!values.breed) {
            errors.breed = "Breed is required";
          }
          if (!values.gender) {
            errors.gender = "Gender is required";
          }
          if (!values.pet) {
            errors.pet = "Type is required";
          }
          if (!values.size) {
            errors.size = "Size is required";
          }
          if (!values.weight) {
            errors.weight = "Weight is required";
          }
          if (values.weight < 0) {
            errors.weight = "Must be number > 0";
          }

          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          dispatch(createPet(values));
          resetForm();
          setFlag(true);
          console.log("formulario enviado");
          setTimeout(() => setFlag(false), 3000);
        }}
      >
        {(props) => (
          <FormContainer>
            <TitleForm>Load your Pets</TitleForm>
            {console.log(props.errors)}
            <Forms>
              <ContainerCamp>
                <Camp>
                  <Label>Name</Label>
                  <Input //maneja todo solo con el name=
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Pet Name"
                  />
                  <ErrorMessage
                    name="name"
                    component={() => <div>{props.errors.name}</div>}
                  />
                </Camp>
                <Camp>
                  <Label>Image</Label>
                  <Input
                    type="text"
                    id="image"
                    name="image"
                    placeholder="Pet Image"
                  />                  
                </Camp>
                <Camp>
                  <Label>Weight</Label>
                  <Input
                    type="number"
                    id="image"
                    name="weight"
                    placeholder="Pet Weight"
                  />
                  <ErrorMessage
                    name="weight"
                    component={() => <div>{props.errors.weight}</div>}
                  />
                </Camp>
                <Camp>
                  <Label>Size</Label>
                  <Field name="size" as="select">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="big">Big</option>
                  </Field>
                  <ErrorMessage
                    name="size"
                    component={() => <div>{props.errors.size}</div>}
                  />
                </Camp>
                <Camp>
                  <Label>Breed</Label>
                  <Field name="breed" as="select">
                    <option value="crossbreed">Crossbreed</option>
                  </Field>
                  <ErrorMessage
                    name="breed"
                    component={() => <div>{props.errors.breed}</div>}
                  />
                </Camp>
                <Camp>
                  <Label>Fur</Label>
                  <Label>
                    <Field type="radio" name="fur" value="short" /> Short
                    <Field type="radio" name="fur" value="long" /> Long
                  </Label>
                  <ErrorMessage
                    name="fur"
                    component={() => <div>{props.errors.fur}</div>}
                  />
                </Camp>
                <Camp>
                  <Label>Type</Label>
                  <Label>
                    <Field type="radio" name="pet" value="dog" /> Dog
                    <Field type="radio" name="pet" value="cat" /> Cat
                  </Label>
                  <ErrorMessage
                    name="pet"
                    component={() => <div>{props.errors.pet}</div>}
                  />
                </Camp>
                <Camp>
                  <Label>Gender</Label>
                  <Label>
                    <Field type="radio" name="gender" value="male" /> Male
                    <Field type="radio" name="gender" value="female" /> Female
                  </Label>
                  <ErrorMessage
                    name="gender"
                    component={() => <div>{props.errors.gender}</div>}
                  />
                </Camp>
                <Camp>
                  <Label>
                    Castration <Field type="checkbox" name="castration" />
                    {` ${props.values.castration}`}
                  </Label>
                  <ErrorMessage
                    name="castration"
                    component={() => <div>{props.errors.castration}</div>}
                  />
                </Camp>
                <Camp>
                  <Label>
                    Vaccinate <Field type="checkbox" name="vaccinate" />
                    {` ${props.values.vaccinate}`}
                  </Label>
                  <ErrorMessage
                    name="vaccinate"
                    component={() => <div>{props.errors.vaccinate}</div>}
                  />
                </Camp>
              </ContainerCamp>
              <ContainerButton>
                <ButtonSubmit type="submit">submit</ButtonSubmit>
                {flag && <p>Succesfully created</p>}
              </ContainerButton>
            </Forms>
          </FormContainer>
        )}
      </Formik>
    </>
  );
}

/*  <Formik
        initialValues={{
          name: "",
          image: "",
        }}
        validate={(values) => {
          let errors = {};
          if (!values.name) {
            errors.name = "Name is required";
          }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)){
            errors.name = "Name only alows letters and blank space"
          }


          if (!values.image) {
            errors.image = "Image is required";
          }

          return errors;
        }}
        onSubmit={(values, {resetForm}) => {
          resetForm();
          setFlag(true)
          setTimeout(()=> setFlag(false), 3000)
          console.log("formulario enviado");
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <div>
              <label>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="pet name"
                value={props.values.name}
                onChange={props.handleChange} //event listener
                onBlur={props.handleBlur} //valida el input cuando hago click fuera del input
              />
              { props.touched.name && props.errors.name && <div>{props.errors.name}</div>}
            </div>
            <div>
              <label>image</label>
              <input
                type="text"
                id="image"
                name="image"
                placeholder="pet image"
                value={props.values.image}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
              />
              {props.touched.image && props.errors.image && <div>{props.errors.image}</div>}
            </div>

            <button type="submit">submit</button>
            {flag && <p>Succesfully created</p>}
          </form>
        )}
      </Formik> */
