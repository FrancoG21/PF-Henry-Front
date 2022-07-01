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
} from "./StyledUserTransitPetForm";

export default function UserTransitPetForm() {
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
    dispatch(getById(id));
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          userAge: "",
          userLocation: "",
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
        }}
        validate={(values) => {}}
        onSubmit={(values, { resetForm }) => {
          setFlag(true);
          console.log("formulario enviado");
          setTimeout(() => setFlag(false), 3000);
        }}
      >
        {(props) => (
          <FormContainer>
            <TitleForm>Formulario Hogar transitorio</TitleForm>
            <Camp>
              <h2>¿Qué es un hogar transitorio?</h2>
            </Camp>
            <h4>
              Los hogares transitorios son casas de personas que cuidan animales
              por un período de tiempo determinado, hasta que el animal
              encuentre la persona indicada que lo adopte definitivamente.
            </h4>
            <h4>
              Los hogares de tránsito ayudan mucho a los animales a sobrellevar
              una situación difícil en un momento dado, por ejemplo; cuando se
              le ofrece tránsito a un animal maltratado hasta que éste se
              recupera por completo, o cuando se crían cachorros que hayan
              perdido a su madre.
            </h4>
            <h4>
              Podés ofrecerte como hogar transitorio si contás con las ganas, el
              tiempo y el lugar para ayudar a un animal en ese momento donde
              está más vulnerable, aunque no estés en condiciones de adoptar
              definitivamente al animal. ¡Ofrecer tránsito también ayuda!
            </h4>

            <Forms>
              {console.log(props.values)}
              <ContainerCamp>
                <Camp>
                  <img
                    src={pet?.image}
                    alt={pet.name}
                    width="600"
                    height="400"
                  />
                  <Label>
                   Macota elegida: {pet?.name[0].toUpperCase() +
                    pet?.name.slice(1).toLowerCase()}
                  </Label>
                </Camp>
                <Camp>
                  <Label>Nombre Usuario</Label>
                  <Label>Apellido Usuario</Label>
                </Camp>
                <Camp>
                  <Label>Edad</Label>
                  <Input
                    type="number"
                    id="userAge"
                    name="userAge"
                    placeholder="Edad del postulante"
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
                    placeholder="Teléfono del postulante"
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
                </Camp>
                <Camp>
                  <Label>¿Cuántos ? ¿Nos cuentan un poco sobre ellos?</Label>
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
                    <p>¿Dónde vivira la mascota en transito?</p>
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
                  <Label>¿Dónde dormirá la mascota en transito?</Label>
                  <Input
                    type="text"
                    id="adoptedPetSleepingSpace"
                    name="adoptedPetSleepingSpace"
                    placeholder="Tu espuesta"
                  />
                </Camp>
                <Camp>
                  <Label>
                    ¿Cuánto tiempo podés tener en tránsito al animal?
                  </Label>
                  <Input
                    type="text"
                    id="adoptedPetAloneMoments"
                    name="adoptedPetAloneMoments"
                    placeholder="Tu espuesta"
                  />
                </Camp>
                <Camp>
                  <Label>¿Por qué deseas dar tránsito a un animal?</Label>
                  <Input
                    type="text"
                    id="adoptedPetAloneMoments"
                    name="adoptedPetAloneMoments"
                    placeholder="Tu espuesta"
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
                </Camp>
                <Camp>
                  <Label>
                    ¿Sos consciente que la responsabilidad de ser un hogar
                    transitorio implica hacerse cargo de la alimentación y
                    cuidados veterinarios del animal?
                  </Label>
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
