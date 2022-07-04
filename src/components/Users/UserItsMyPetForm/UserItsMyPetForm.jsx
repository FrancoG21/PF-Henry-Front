import React, { useEffect, useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { getById } from "../../../redux/actions/index";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//import Supliers from "./Supliers";
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
  ImagePet,
} from "./StyledUserItsMyPetForm";
import moment from "moment";
import ImageUploader from "../PetCreate/imagenes/ImagesUploader";

export default function UserItsMyPetForm() {
  const [flag, setFlag] = useState(false);
  const pet = useSelector((state) => state.petDetail);
  const { id } = useParams();

  const [json, setJson] = useState({images:[]})

  const dispatch = useDispatch();
  // Pagina de ejemplo --> https://www.vidanimal.org.ar/como-ayudar/ofrece-hogar-de-transito/

  const options1 = [
    "Deporte- Hacer actividades al aire libre",
    "Caza",
    "Compañia",
    "Defensa",
    "Guardia",
  ];
  const options2 = [
    "Departamento",
    "PH",
    "Casa",
    "Casa en Barrio Cerrado",
    "Quinta",
    "Campo",
  ];
  const options3 = ["Balcón", "Patio", "Terraza", "Parque", "Otro"];

  useEffect(() => {
     dispatch(getById(id))
  }, []);

  function capitalize(str) {
    return str.replace(/^\w/, (c) => c.toUpperCase());
  }

  return (
    <>
      <Formik
        initialValues={{        
          tel: "",       
          image: "",
          getReason: "",
          lostZone: "",
          originalName: "",
          userMovility: "",
          petId: id,
          userId:'userId', //--> despues ver lo de login              
          formDate: moment().format('DD/MM/YYYY')          
        }}
        validate={(values) => {
          let errors = {};

          for (let prop in values) {
            if (!values[prop]) {
              errors[prop] = `${capitalize(prop)} is required`;
              delete errors.actualPlace;
            }
          }

          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          for (let prop in values) {
            if (prop === "adoptedPetPlace" || prop === "openSpace") {
              values[prop] = values[prop].label;
            }

            if (
              values.actualPlaceDirection ||
              values.actualPlaceHood ||
              values.actualPlaceCity ||
              values.actualPlaceProvince ||
              values.actualPlacePostalCode
            ) {
              values.actualPlace = [`${values.actualPlaceDirection}`,`${values.actualPlaceHood}`,`${values.actualPlaceCity}`,`${values.actualPlaceProvince}`,`${values.actualPlacePostalCode}`];

              for (let prop in values) {
                if (
                  prop === "actualPlaceDirection" ||
                  prop === "actualPlaceHood" ||
                  prop === "actualPlaceCity" ||
                  prop === "actualPlaceProvince" ||
                  prop === "actualPlacePostalCode"
                ) {
                  delete values[prop];
                }
              }
            }
          }

          setFlag(true);
          console.log("formulario enviado");
          console.log(values);
          resetForm();
          setTimeout(() => setFlag(false), 3000);
        }}
      >
        {(props) => (
          <FormContainer>
            <TitleForm>Formulario esta es mi mascota</TitleForm>
            {/* <Camp>
              <h3>Llena los siguientes campos</h3>
            </Camp> */}           

            <Forms>
               {console.log(props.errors)}
              <ContainerCamp>
                 <Camp>
                  <ImagePet
                    src={pet?.image}
                    alt={pet?.name}
                    width="600"
                    height="400"                    
                  />
                  <Label>
                    Macota elegida:{" "}
                    {pet.name}
                    {/* {pet?.name[0].toUpperCase() +
                      pet?.name.slice(1).toLowerCase()} */}
                  </Label>
                </Camp> 
                <Camp>
                  <Label>Nombre Usuario</Label>
                  <Label>Apellido Usuario</Label>
                </Camp>
                {/* <div>{JSON.stringify(props.errors)}</div> */}
                <Camp>
                  <Label>Porque cree que es su mascota ?</Label>
                  <Input
                    type="text"
                    id="getReason"
                    name="getReason"
                    placeholder="Su respuesta"
                  />
                  <ErrorMessage
                    name="getReason"
                    component={() => <div>{props.errors.getReason}</div>}
                  />
                </Camp>
                <Camp>
                  <Label>En que zona cree que se le pudo haber perdido ?</Label>
                  <Input
                    type="text"
                    id="lostZone"
                    name="lostZone"
                    placeholder="Su respuesta"
                  />
                  <ErrorMessage
                    name="lostZone"
                    component={() => (
                      <div>{props.errors.lostZone}</div>
                    )}
                  />
                </Camp>
                <Camp>
                  <Label>A que nombre responde la mascota ?</Label> {/* Cual era el nombre original de la mascota */}
                  <Input
                    type="text"
                    id="originalName"
                    name="originalName"
                    placeholder="Su respuesta"
                  />
                  <ErrorMessage
                    name="originalName"
                    component={() => <div>{props.errors.originalName}</div>}
                  />
                </Camp>
                <Camp>
                  <Label>Cargue aqui fotos de la mascota, si esta acompañada de usted mejor</Label>
                  <ImageUploader json={json} setJson={setJson} />
                  <ErrorMessage
                    name="image"
                    component={() => <div>{props.errors.image}</div>}
                  />
                </Camp>
              
                <Camp>
                  <Label>Teléfono</Label>
                  <Input
                    type="number"
                    id="tel"
                    name="tel"
                    placeholder="Su telefono"
                  />
                  <ErrorMessage
                    name="tel"
                    component={() => <div>{props.errors.tel}</div>}
                  />
                </Camp>
                <Camp>
                  <Label>¿Tiene movilidad para buscar la mascota?</Label>
                  <Label>
                    <Field type="radio" name="userMovility" value="yes" /> Si
                    <Field type="radio" name="userMovility" value="no" /> No
                    {/* <Field
                      type="radio"
                      name="userMovility"
                      value="maybe"
                    />{" "}
                    Posiblemente */}
                  </Label>
                  <ErrorMessage
                    name="userMovility"
                    component={() => <div>{props.errors.userMovility}</div>}
                  />
                </Camp>
        
              {/*   <Camp>
                  <Label>
                    <p>¿Dónde vivira la mascota en transito?</p>
                  </Label>
                  <Supliers options={options2} name="adoptedPetPlace" />
                  <ErrorMessage
                    name="adoptedPetPlace"
                    component={() => <div>{props.errors.adoptedPetPlace}</div>}
                  />
                </Camp> */}
                {/* <Camp>
                  <Label>
                    <p>¿Posee espacio al aire libre?</p>
                  </Label>
                  <Supliers options={options3} name="openSpace" />
                  <ErrorMessage
                    name="openSpace"
                    component={() => <div>{props.errors.openSpace}</div>}
                  />
                </Camp> */}            
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
