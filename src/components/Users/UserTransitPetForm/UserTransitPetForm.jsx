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
    /*  dispatch(getById(id)) */
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
            <Camp><h2>¿Qué es un hogar transitorio?</h2></Camp>
            <h4>Los hogares transitorios son casas de personas que cuidan animales por un período de tiempo determinado, hasta que el animal encuentre la persona indicada que lo adopte definitivamente.</h4>

            <Forms>
              {console.log(props.values)}
              <ContainerCamp>
                <Camp>
                  <Label>imagen de la mascota</Label>
                  <Label>nombre de la mascota</Label>
                </Camp>
                <Camp>
                  <Label>Nombre Usuario</Label>
                  <Label>Apellido del Usuario</Label>
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
                  <Label>Domicilio</Label>
                  <Input
                    type="text"
                    id="userLocation"
                    name="userLocation"
                    placeholder="Domicilio del postulante"
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
                  <Label>¿Cuantas Personas viven en la casa?</Label>
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
                    <p>¿Por que se interesan en este animal en particular?</p>
                    <p>
                      (Cómo conocemos el carácter de nuestras mascotas la pregunta
                      nos permite evaluar si es el indicado para lo que buscan)
                    </p>
                  </Label>
                  <Supliers options={options1} name='adoptionReason'/>
                </Camp>
                <Camp>
                  <Label>
                    <p>¿Dónde vivira la mascota adoptada?</p>
                  </Label>
                  <Supliers options={options2} name='adoptedPetPlace'/>
                </Camp>
                <Camp>
                  <Label>
                    <p>¿Posee espacio al aire libre?</p>
                  </Label>
                  <Supliers options={options3} name='openSpace'/>
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
                  <Label>¿Estará solo? ¿Cuánto tiempo?</Label>
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
                    En caso de mudarse, ha pensado que hará con el perro?
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
                    ¿Están de acuerdo en tener un tiempo de adaptación?
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
