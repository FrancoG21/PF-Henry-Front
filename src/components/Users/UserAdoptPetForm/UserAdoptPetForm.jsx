import React, { useEffect, useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { getById } from "../../../redux/actions/index";
import { useParams } from "react-router";
 import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
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
  } from "./StyledUserAdoptPetForm";

export default function UserAdoptPetForm() {

    const [flag, setFlag] = useState(false);
    const pet = useSelector((state) => state.petDetail);
    const { id } = useParams();

        const dispatch = useDispatch()

    useEffect(()=>{
       /*  dispatch(getById(id)) */
    },[])

  return (
    <>
      <Formik
        initialValues={{
        
        }}
        validate={(values) => {
          
        }}

        onSubmit={(values, { resetForm }) => {
          
        
          setFlag(true);
          console.log("formulario enviado");
          setTimeout(() => setFlag(false), 3000);
        }}
      >
        {(props) => (
          <FormContainer>
            <TitleForm>Load your Pets</TitleForm>
            <Forms>
             {/*  <div>{JSON.stringify(props.values)}</div>
              <br />
              <div>{JSON.stringify(props.errors)}</div>
              <br /> */}
              <ContainerCamp>
                <Camp>
                  <Label>Do you want to:</Label>
                  <Label>
                    <Field type="radio" name="state" value="adopt" /> Give your
                    pet for adoption
                    <Field type="radio" name="state" value="lost" /> Load a lost
                    pet
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
                    {/* {breeds.length === 0 ? (
                      <option value="crossbreed">Crossbreed</option>
                    ) : (
                      breeds.map((breed) => (
                        <option value={breed} key={breed}>
                          {breed.replace(/^\w/, (c) => c.toUpperCase())}
                        </option>
                      ))
                    )} */}
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