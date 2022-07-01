import React, { useEffect, useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { getById } from "../../../redux/actions/index";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Supliers from "./Supliers";
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
import moment from "moment";

export default function UserAdoptPetForm() {
  const [flag, setFlag] = useState(false);
  const pet = useSelector((state) => state.petDetail);
  const { id } = useParams();

  // Pagina de ejemplo --> https://docs.google.com/forms/d/e/1FAIpQLSdh3Te8u3anAH182My7fORBlKlAyBzSuiHfp6YjkqcoQq5F8Q/viewform

  const dispatch = useDispatch();

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
    dispatch(getById(id));
  }, [dispatch]);

  return (
    <>
      <Formik
        initialValues={{
          userAge: "",
          actualPlaceDirection: "",
          actualPlaceHood: "",
          actualPlaceCity: "",
          actualPlaceProvince: "",
          actualPlacePostalCode: "",
          tel: "",
          familySize: "",
          familyRelation: "",
          otherPets: "false",
          otherPetsInfo: "",
          otherPetsCastration: "false",
          otherPetsVacunation: "false",
          adoptionReason: "",
          adoptedPetPlace: "",
          openSpace: "",
          owner: "false",
          adoptedPetSleepingSpace: "",
          adoptedPetAloneMoments: "",
          adoptedPetWalkingInfo: "",
          userMoveingIdea: "",
          adaptationTime: "",
          formDate: moment().format("L"),
          userMovility: "",
        }}
        validate={(values) => {
          let errors = {};

          for (let prop in values) {
            if (!values[prop]) {
              errors[prop] = `${capitalize(prop)} is required`;
            }
          }

          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          setFlag(true);
          console.log("formulario enviado");
          setTimeout(() => setFlag(false), 3000);
        }}
      >
        {(props) => (
          <FormContainer>
            <TitleForm>Formulario de adopción</TitleForm>
            <Forms>
            {console.log('abajo values')}
              {console.log(props.values)}
              {console.log('abajo errors')}
              {console.log(props.errors)}
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
                <div>{JSON.stringify(props.errors)}</div>
                <Camp>
                  <Label>Edad</Label>
                  <Input
                    type="number"
                    id="userAge"
                    name="userAge"
                    placeholder="Edad del adoptante"
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
                </Camp>
                <Camp>
                  <Label>Barrio: </Label>
                  <Input
                    type="text"
                    id="actualPlaceHood"
                    name="actualPlaceHood"
                    placeholder="Barrio"
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
                </Camp>
                <Camp>
                  <Label>Provincia:</Label>
                  <Input
                    type="text"
                    id="actualPlaceProvince"
                    name="actualPlaceProvince"
                    placeholder="Provincia"
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
                </Camp>
                <Camp>
                  <Label>Teléfono</Label>
                  <Input
                    type="number"
                    id="tel"
                    name="tel"
                    placeholder="Teléfono del adoptante"
                  />
                </Camp>
                <Camp>
                  <Label>¿Cuántas personas viven en la casa?</Label>
                  <Input
                    type="number"
                    id="familySize"
                    name="familySize"
                    placeholder="Tu espuesta"
                  />
                </Camp>
                <Camp>
                  <Label>
                    Composición del núcleo familiar (Relación y edades de las
                    Personas que viven en la casa) Nos permite saber si la
                    mascota es apto para tu hogar.
                  </Label>
                  <Input
                    type="text"
                    id="familyRelation"
                    name="familyRelation"
                    placeholder="Tu espuesta"
                  />
                </Camp>
                <Camp>
                  <Label>
                    ¿Tiene otros animales? (Nos permite saber si la mascota es
                    apta para tu hogar)
                  </Label>
                  <Label>
                    <Field type="radio" name="otherPets" value="true" /> Si
                    <Field type="radio" name="otherPets" value="false" /> No
                  </Label>
                </Camp>
                <Camp>
                  <Label>¿Cuántos ? ¿Nos cuenta un poco sobre ellos?</Label>
                  <Input
                    type="text"
                    id="otherPetsInfo"
                    name="otherPetsInfo"
                    placeholder="Tu espuesta"
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
                </Camp>
                <Camp>
                  <Label>
                    <p>¿Por que se interesa en este animal en particular?</p>
                    <p>
                      (Cómo conocemos el carácter de nuestras mascotas la
                      pregunta nos permite evaluar si es el indicado para lo que
                      buscan)
                    </p>
                  </Label>
                  <Supliers options={options1} name="adoptionReason" />
                </Camp>
                <Camp>
                  <Label>
                    <p>¿Dónde vivira la mascota adoptada?</p>
                  </Label>
                  <Supliers options={options2} name="adoptedPetPlace" />
                </Camp>
                <Camp>
                  <Label>
                    <p>¿Posee espacio al aire libre?</p>
                  </Label>
                  <Supliers options={options3} name="openSpace" />
                </Camp>
                <Camp>
                  <Label>¿Son propietarios o alquilan?</Label>
                  <Label>
                    <Field type="radio" name="owner" value="owner" />{" "}
                    Propietario
                    <Field type="radio" name="owner" value="tenant" /> Alquilo
                  </Label>
                </Camp>
                <Camp>
                  <Label>¿Dónde dormirá el adoptado?</Label>
                  <Input
                    type="text"
                    id="adoptedPetSleepingSpace"
                    name="adoptedPetSleepingSpace"
                    placeholder="Tu espuesta"
                  />
                </Camp>
                <Camp>
                  <Label>¿Estará sola? ¿Cuánto tiempo?</Label>
                  <Input
                    type="text"
                    id="adoptedPetAloneMoments"
                    name="adoptedPetAloneMoments"
                    placeholder="Tu espuesta"
                  />
                </Camp>
                <Camp>
                  <Label>¿Quién lo paseará? ¿Cuántas veces al día?</Label>
                  <Input
                    type="text"
                    id="adoptedPetWalkingInfo"
                    name="adoptedPetWalkingInfo"
                    placeholder="Tu espuesta"
                  />
                </Camp>
                <Camp>
                  <Label>
                    En caso de mudarse, ha pensado que hará con la mascota?
                  </Label>
                  <Input
                    type="text"
                    id="userMoveingIdea"
                    name="userMoveingIdea"
                    placeholder="Tu espuesta"
                  />
                </Camp>
                <Camp>
                  <Label>
                    ¿Está de acuerdo en tener un tiempo de adaptación?
                  </Label>
                  <Label>
                    <Field type="radio" name="adaptationTime" value="yes" /> Si
                    <Field type="radio" name="adaptationTime" value="no" /> No
                    <Field
                      type="radio"
                      name="adaptationTime"
                      value="maybe"
                    />{" "}
                    Tal vez
                  </Label>
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
