import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Field, ErrorMessage } from "formik";
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
import axios from "axios";
/* import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom' */

export default function PetCreate() {
  const url = "http://localhost:3001";
  const todayDate = new Date().toISOString().slice(0, 10);
  //minuto 42:40 video usa form, field, etc
  // 47:28 con que otros tags se puede trabajar ??

  const dispatch = useDispatch();
  const [flag, setFlag] = useState(false);
  const [breeds, setBreeds] = useState([]);
  const [petType, setPetType] = useState("");
  const [otherBreed, setOtherBreed] = useState('') //este estado era para que escuche si breed esta en other

  useEffect(() => {
    axios
      .get(`${url}/breed?pet=${petType}`)
      .then((r) => setBreeds(["other"].concat(r.data))); //setBreeds(r.data))
  }, [petType]);

  let isUrl =
    /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!]))?/;
  function capitalize(str) {
    return str.replace(/^\w/, (c) => c.toUpperCase());
  }

  const handleClickPetTypeBreeds = (type) => {
    setPetType(type);
  };



  return (
    <>
      <Formik
        initialValues={{
          name: "", //string 255 caracteres
          pet: "dog", // cat or dog
          image: "", //string 255 caracteres
          size: "", // small, medium, big
          weight: "", //
          fur: "", // short or long
          breed: "", // crossbreed
          gender: "", // female or male
          castration: "", // true or false
          vaccinate: "", // true or false
          state: "", //adopt or lost
          date: "",
          place: "",
        }}
        validate={(values) => {
          let errors = {};
          // if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
          if (!/^[a-z]+$/g.test(values.name))
            errors.name = "Name only allows lower case letters";
          if (
            !/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!]))?/.test(
              values.image
            )
          )
            errors.image = "Image must be a valid URL";
          if (values.weight < 0) errors.weight = "Must be number > 0";
          if (values.weight > 100) errors.weight = "Must be number < 100";
          for (let prop in values) {
            if (
              (prop === "castration" || prop === "vaccinate") &&
              values[prop] === false
            ) {
              delete errors[prop];
              continue;
            }

            if (values.state === "adopt" && !values[prop]) {
              errors[prop] = `${capitalize(prop)} is required`;
              for (let prop in errors) {
                if (prop === "place" || prop === "date") {
                  delete errors[prop];
                }
              }
            }

            if (values.state === "lost" && !values[prop]) {
              errors[prop] = `${capitalize(prop)} is required`;
            }

            /* if(values.breed === 'other'){
              values.breed = otherBreed
            } */
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          console.log(
            "SE ENVIAN ESTOS VALORES -> Esperando a team back para los cambios"
          );

          console.log(values);
          /* dispatch(createPet(values)); */
          resetForm();
          setFlag(true);
          console.log("formulario enviado");
          setTimeout(() => setFlag(false), 3000);
        }}
      >
        {(props) => (
          <FormContainer>
            <TitleForm>Load your Pets</TitleForm>
            <Forms>
              <div>{JSON.stringify(props.values)}</div>
              <br />
              <div>{JSON.stringify(props.errors)}</div>
              <br />
              <ContainerCamp>
                <Camp>
                  <Label>Do you want to:</Label>
                  <Label>
                    <Field type="radio" name="state" value="adopt" /> Give your
                    pet for adoption
                    <Field type="radio" name="state" value="lost" /> I found a pet
                  </Label>
                  <ErrorMessage
                    name="state"
                    component={() => <div>{props.errors.state}</div>}
                  />
                </Camp>
                <Camp>
                  <Label>Name</Label>
                  <Input //maneja todo solo con el name=
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Localidad, Barrio"
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
                  <ErrorMessage
                    name="image"
                    component={() => <div>{props.errors.image}</div>}
                  />
                </Camp>
                <Camp>
                  <Label>Type</Label>
                  <Label>
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
                  <ErrorMessage
                    name="pet"
                    component={() => <div>{props.errors.pet}</div>}
                  />
                </Camp>
                <Camp>
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
                  {props.values.breed === "other" && (
                    <Input
                      type="text"
                      id="breed"
                      name="breed"                     
                      placeholder="Write another breed"                                                         
                    />                    
                  )}
                  <div>breeds: {JSON.stringify(props.values.other)}</div>
                  <ErrorMessage
                    name="breed"
                    component={() => <div>{props.errors.breed}</div>}
                  />
                </Camp>
                <Camp>
                  <Label>Weight</Label>
                  <Input
                    type="number"
                    id="weight"
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
                  <Label>
                    <Field type="radio" name="size" value="small" /> Small
                    <Field type="radio" name="size" value="medium" /> Medium
                    <Field type="radio" name="size" value="big" /> Big
                  </Label>
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
                  <Label>Gender</Label>
                  <Label>
                    <Field type="radio" name="gender" value="male" /> Male
                    <Field type="radio" name="gender" value="female" /> Female
                    <Field type="radio" name="gender" value="female" /> Unknown
                  </Label>
                  <ErrorMessage
                    name="gender"
                    component={() => <div>{props.errors.gender}</div>}
                  />
                </Camp>
                <Camp>
                  <Label>Castration</Label>
                  <Label>
                    <Field type="radio" name="castration" value="true" /> Yes
                    <Field type="radio" name="castration" value="false" /> No
                    <Field
                      type="radio"
                      name="castration"
                      value="unknown"
                    />{" "}
                    Unknown
                  </Label>
                  <ErrorMessage
                    name="castration"
                    component={() => <div>{props.errors.castration}</div>}
                  />
                </Camp>
                <Camp>
                  <Label>Vaccinate</Label>
                  <Label>
                    <Field type="radio" name="vaccinate" value="true" /> Yes
                    <Field type="radio" name="vaccinate" value="false" /> No
                    <Field type="radio" name="vaccinate" value="unknown" />{" "}
                    Unknown
                  </Label>
                  <ErrorMessage
                    name="vaccinate"
                    component={() => <div>{props.errors.vaccinate}</div>}
                  />
                </Camp>
                {props.values.state === "lost" && (
                  <div>
                    <Camp>
                      <Label>When did you found it ?</Label>
                      <input
                        type="date"
                        name="date"
                        max={todayDate} 
                        min="2022-01-01"
                      />
                    </Camp>
                    <Camp>
                      <Label>Where did you found it ?</Label>
                      <Input
                        type="text"
                        id="place"
                        name="place"
                        placeholder="Pet place"
                      />
                    </Camp>

                    <h1>Fecha de hoy: {todayDate}</h1>
                  </div>
                )}
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
