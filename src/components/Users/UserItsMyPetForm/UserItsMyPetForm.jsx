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
} from "./StyledUserItsMyPetForm";
import moment from "moment";

export default function UserItsMyPetForm() {
  const [flag, setFlag] = useState(false);
  const pet = useSelector((state) => state.petDetail);
  const { id } = useParams();

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
    "Otro",
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
          userAge: "",
          tel: "",
          otherPets: "",
          otherPetsInfo: "",
          otherPetsCastration: "",
          otherPetsVacunation: "",
          adoptedPetPlace: "",
          openSpace: "",
          owner: "",
          adoptedPetSleepingSpace: "",
          transitPetPeriod: "",
          actualPlace: "",
          userAgreement: "",
          formDate: moment().format('DD/MM/YYYY'),
          transitPetReason: "",
          actualPlaceDirection: "",
          actualPlaceHood: "",
          actualPlaceCity: "",
          actualPlaceProvince: "",
          actualPlacePostalCode: "",
          userMovility: "",
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
              values.actualPlace = `${values.actualPlaceDirection}, ${values.actualPlaceHood}, ${values.actualPlaceCity}, ${values.actualPlaceProvince}, ${values.actualPlacePostalCode}`;

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
            <Camp>
              <h3>Llena los siguientes campos</h3>
            </Camp>           

            <Forms>
              {/* {console.log(props.values)} */}
              <ContainerCamp>
                 <Camp>
                  <img
                    src={pet?.image}
                    alt={pet.name}
                    width="600"
                    height="400"
                  />
                  <Label>
                    Macota elegida:{" "}
                    {pet?.name[0].toUpperCase() +
                      pet?.name.slice(1).toLowerCase()}
                  </Label>
                </Camp> 
                <Camp>
                  <Label>Nombre Usuario</Label>
                  <Label>Apellido Usuario</Label>
                </Camp>
                {/* <div>{JSON.stringify(props.errors)}</div> */}
                <Camp>
                  <Label>Edad</Label>
                  <Input
                    type="number"
                    id="userAge"
                    name="userAge"
                    placeholder="Edad del postulante"
                  />
                  <ErrorMessage
                    name="userAge"
                    component={() => <div>{props.errors.userAge}</div>}
                  />
                </Camp>
                <Camp>
                  <Label>Dirección:</Label>
                  <Input
                    type="text"
                    id="actualPlaceDirection"
                    name="actualPlaceDirection"
                    placeholder="Calle altura"
                  />
                  <ErrorMessage
                    name="actualPlaceDirection"
                    component={() => (
                      <div>{props.errors.actualPlaceDirection}</div>
                    )}
                  />
                </Camp>
                <Camp>
                  <Label>Barrio: </Label>
                  <Input
                    type="text"
                    id="actualPlaceHood"
                    name="actualPlaceHood"
                    placeholder="Barrio"
                  />
                  <ErrorMessage
                    name="actualPlaceHood"
                    component={() => <div>{props.errors.actualPlaceHood}</div>}
                  />
                </Camp>
                <Camp>
                  <Label>Ciudad: </Label>
                  <Input
                    type="text"
                    id="actualPlaceCity"
                    name="actualPlaceCity"
                    placeholder="Ciudad"
                  />
                  <ErrorMessage
                    name="actualPlaceCity"
                    component={() => <div>{props.errors.actualPlaceCity}</div>}
                  />
                </Camp>
                <Camp>
                  <Label>Provincia:</Label>
                  <Input
                    type="text"
                    id="actualPlaceProvince"
                    name="actualPlaceProvince"
                    placeholder="Provincia"
                  />
                  <ErrorMessage
                    name="actualPlaceProvince"
                    component={() => (
                      <div>{props.errors.actualPlaceProvince}</div>
                    )}
                  />
                </Camp>
                <Camp>
                  <Label>Codigo Postal: </Label>
                  <Input
                    type="number"
                    id="actualPlacePostalCode"
                    name="actualPlacePostalCode"
                    placeholder="Codigo Postal"
                  />
                  <ErrorMessage
                    name="actualPlacePostalCode"
                    component={() => (
                      <div>{props.errors.actualPlacePostalCode}</div>
                    )}
                  />
                </Camp>
                <Camp>
                  <Label>Teléfono</Label>
                  <Input
                    type="number"
                    id="tel"
                    name="tel"
                    placeholder="Teléfono del postulante"
                  />
                  <ErrorMessage
                    name="tel"
                    component={() => <div>{props.errors.tel}</div>}
                  />
                </Camp>
                <Camp>
                  <Label>
                    ¿Tenes otros animales? (Nos permite saber si la mascota es
                    apta para tu hogar)
                  </Label>
                  <Label>
                    <Field type="radio" name="otherPets" value="true" /> Si
                    <Field type="radio" name="otherPets" value="false" /> No
                  </Label>
                  <ErrorMessage
                    name="otherPets"
                    component={() => <div>{props.errors.otherPets}</div>}
                  />
                </Camp>
                <Camp>
                  <Label>¿Cuántos ? ¿Nos cuentan un poco sobre ellos?</Label>
                  <Input
                    type="text"
                    id="otherPetsInfo"
                    name="otherPetsInfo"
                    placeholder="Tu espuesta"
                  />
                  <ErrorMessage
                    name="otherPetsInfo"
                    component={() => <div>{props.errors.otherPetsInfo}</div>}
                  />
                </Camp>
                <Camp>
                  <Label>¿Estan castrados?</Label>
                  <Label>
                    <Field
                      type="radio"
                      name="otherPetsCastration"
                      value="true"
                    />{" "}
                    Si
                    <Field
                      type="radio"
                      name="otherPetsCastration"
                      value="false"
                    />{" "}
                    No
                  </Label>
                  <ErrorMessage
                    name="otherPetsCastration"
                    component={() => (
                      <div>{props.errors.otherPetsCastration}</div>
                    )}
                  />
                </Camp>
                <Camp>
                  <Label>¿Estan vacunados?</Label>
                  <Label>
                    <Field
                      type="radio"
                      name="otherPetsVacunation"
                      value="true"
                    />{" "}
                    Si
                    <Field
                      type="radio"
                      name="otherPetsVacunation"
                      value="false"
                    />{" "}
                    No
                  </Label>
                  <ErrorMessage
                    name="otherPetsVacunation"
                    component={() => (
                      <div>{props.errors.otherPetsVacunation}</div>
                    )}
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
                <Camp>
                  <Label>¿Son propietarios o alquilan?</Label>
                  <Label>
                    <Field type="radio" name="owner" value="owner" />{" "}
                    Propietario
                    <Field type="radio" name="owner" value="tenant" /> Alquilo
                  </Label>
                  <ErrorMessage
                    name="owner"
                    component={() => <div>{props.errors.owner}</div>}
                  />
                </Camp>
                <Camp>
                  <Label>¿Dónde dormirá la mascota en transito?</Label>
                  <Input
                    type="text"
                    id="adoptedPetSleepingSpace"
                    name="adoptedPetSleepingSpace"
                    placeholder="Tu espuesta"
                  />
                  <ErrorMessage
                    name="adoptedPetSleepingSpace"
                    component={() => (
                      <div>{props.errors.adoptedPetSleepingSpace}</div>
                    )}
                  />
                </Camp>
                <Camp>
                  <Label>
                    ¿Cuánto tiempo podés tener en tránsito al animal?
                  </Label>
                  <Input
                    type="text"
                    id="transitPetPeriod"
                    name="transitPetPeriod"
                    placeholder="Tu espuesta"
                  />
                  <ErrorMessage
                    name="transitPetPeriod"
                    component={() => (
                      <div>{props.errors.transitPetPeriod}</div>
                    )}
                  />
                </Camp>
                <Camp>
                  <Label>¿Por qué deseas dar tránsito a un animal?</Label>
                  <Input
                    type="text"
                    id="transitPetReason"
                    name="transitPetReason"
                    placeholder="Tu espuesta"
                  />
                  <ErrorMessage
                    name="transitPetReason"
                    component={() => <div>{props.errors.transitPetReason}</div>}
                  />
                </Camp>
                <Camp>
                  <Label>¿Tiene movilidad para buscar a la mascota?</Label>
                  <Label>
                    <Field type="radio" name="userMovility" value="yes" /> Si
                    <Field type="radio" name="userMovility" value="no" /> No
                    <Field
                      type="radio"
                      name="userMovility"
                      value="maybe"
                    />{" "}
                    Posiblemente
                  </Label>
                  <ErrorMessage
                    name="userMovility"
                    component={() => <div>{props.errors.userMovility}</div>}
                  />
                </Camp>
                <Camp>
                  <Label>
                    ¿Sos consciente que la responsabilidad de ser un hogar
                    transitorio implica hacerse cargo de la alimentación y
                    cuidados veterinarios del animal?
                  </Label>
                  <Label>
                    <Field type="radio" name="userAgreement" value="true" /> Si
                    <Field type="radio" name="userAgreement" value="false" /> No
                  </Label>
                  <ErrorMessage
                    name="userAgreement"
                    component={() => <div>{props.errors.userAgreement}</div>}
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
