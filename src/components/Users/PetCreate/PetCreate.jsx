import React, { useEffect, useState } from "react";
import {useDispatch} from 'react-redux'; 
import { Formik, Form, Field, ErrorMessage } from "formik";
import {createPet} from '../../../redux/actions/index'
import { ContainerCamp, FormContainer, Camp, TitleForm, Label, Input, Forms, Select, ButtonSubmit, ContainerButton } from "./StyledPetCreate";
/* import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom' */

export default function PetCreate() {
  //minuto 42:40 video usa form, field, etc
  // 47:28 con que otros tags se puede trabajar ??

  const dispatch = useDispatch()
  const [flag, setFlag] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          name: "", //string 255 caracteres
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
          if (!values.name) {
            errors.name = "Name is required";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
            errors.name = "Name only alows letters and blank space";
          }

          /* if (!values.image) {
            errors.image = "Image is required";
          } */

          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          dispatch(createPet(values))
          resetForm();
          setFlag(true);
          setTimeout(() => setFlag(false), 3000);
          console.log("formulario enviado");
        }}
      >
        {(props) => (
          <FormContainer>
            <TitleForm>Load your Pets</TitleForm>
            {console.log(props.values)}
            <Forms>
              <ContainerCamp>
                <Camp>
                  <Label>Name</Label>
                  <Input //maneja todo solo con el name=
                    type="text"
                    id="name"
                    name="name"
                    placeholder="pet name"
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
                    placeholder="pet image"
                  />
                  <ErrorMessage
                    name="image"
                    component={() => <div>{props.errors.image}</div>}
                  />
                </Camp>
                <Camp>
                  <Label>Weight</Label>
                  <Input
                    type="number"
                    id="image"
                    name="weight"
                    placeholder="pet weight"
                  />
                </Camp>
                <Camp>
                  <Label>Size</Label>
                  <Input name="size" as="select">
                    <option value="small">small</option>
                    <option value="medium">medium</option>
                    <option value="big">big</option>
                  </Input>
                </Camp>
                <Camp>
                  <Label>Breed</Label>
                  <Input name="breed" as="select">
                    <option value="crossbreed">crossbreed</option>
                  </Input>
                </Camp>
                <Camp>
                  <Label>Fur</Label>
                  <Label>
                    <Field type="radio" name="fur" value="short" /> Short
                    <Field type="radio" name="fur" value="long" /> Long
                  </Label>
                </Camp>
                <Camp>
                  <Label>Gender</Label>
                  <Label>
                    <Field type="radio" name="gender" value="male" /> Male
                    <Field type="radio" name="gender" value="female" /> Female
                  </Label>
                </Camp>
                <Camp>
                  <Label>
                    Castration <Field type="checkbox" name="castration" />
                    {`${props.values.castration}`}
                  </Label>
                </Camp>
                <Camp>
                  <Label>
                  Vaccinate <Field type="checkbox" name="vaccinate" />
                  {`${props.values.vaccinate}`}
                  </Label>
                </Camp>                      
                {/* <div>
                  <Field name="mensaje" as="textarea" placeholder="Message" />
                </div> */}
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
