import React, { useEffect, useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { getById, petitionGet } from "../../../redux/actions/index";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Supliers from "./Supliers";
import axios from 'axios'
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
  BackIcon,
  BackgroundForm,
  Sub,
  SubText,
  Succes,
} from "./StyledUserTransitPetForm";
import moment from "moment";

export default function UserTransitPetForm() {
  const [flag, setFlag] = useState(false);
  const pet = useSelector((state) => state.petDetail);
  const { id } = useParams();

  const [user, setUser] = useState(null);

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
  const options3 = ["Balcón", "Patio", "Terraza", "Parque"];

  const decodeToken = async () => {
    try {
      const res = await axios.get(
        "/user/" + JSON.parse(localStorage.getItem("userInfo"))
      );
      const resData = res.data;
      setUser(resData);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    dispatch(getById(id));
  }, []);

  useEffect(() => {
    decodeToken();
  }, []);

  function capitalize(str) {
    return str.replace(/^\w/, (c) => c.toUpperCase());
  }

  return (
    <BackgroundForm>
      <div>
        <Link to={`/petdetail/${id}`}>
          <BackIcon />
        </Link>
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
            rental: "",
            adoptedPetSleepingSpace: "",
            transitPetPeriod: "",
            actualPlace: "", //
            userAgreement: "",
            formDate: moment().format("DD/MM/YYYY"),
            getPetReason: "",
            actualPlaceDirection: "",
            actualPlaceHood: "",
            actualPlaceCity: "",
            actualPlaceProvince: "",
            actualPlacePostalCode: "",
            userMovility: "",
            adoptedPetAloneMoments: "",
            adoptedPetWalkingInfo: "",
            adaptationTime: "",
            familySize: "",
            familyRelation: "",
            petId: id,
            userId: user && user.id,
            state: 'transit'
            // userMovingIdea no hay
          }}
          validate={(values) => {
            let errors = {};

            for (let prop in values) {
              if (!values[prop]) {
                errors[prop] = `${newLabel(prop)}`;
                delete errors.actualPlace;
              }
            }

            if (values.otherPets === "false") {
              for (let prop in errors) {
                if (
                  prop === "otherPetsInfo" ||
                  prop === "otherPetsCastration" ||
                  prop === "otherPetsVacunation"
                ) {
                  delete errors[prop];
                }
              }
            }

            if(values.userAge < 18){
              errors.userAge = 'Debes ser mayor de 18 años'
            }
            
            if(values.tel.toString().length < 9){
              errors.tel = 'Numero de telefono debe contener por lo menos 9 numeros' 
            }
            
            if(values.actualPlacePostalCode.toString().length !== 4){
              errors.actualPlacePostalCode = 'Codigo Postal ebe ser de 4 digitos'          
            }

            if (user) {
              values.userId = user.id;
              delete errors.userId;
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
                values.actualPlace = [
                  `${values.actualPlaceDirection}`,
                  `${values.actualPlaceHood}`,
                  `${values.actualPlaceCity}`,
                  `${values.actualPlaceProvince}`,
                  `${values.actualPlacePostalCode}`,
                ];

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
              if (values.otherPets === "false") {
                for (let prop in values) {
                  if (
                    prop === "otherPetsInfo" ||
                    prop === "otherPetsCastration" ||
                    prop === "otherPetsVacunation"
                  ) {
                    values[prop] = "";
                  }
                }
              }
            }

            setFlag(true);
            console.log("formulario enviado");
            dispatch(petitionGet(values))
            resetForm();
            setTimeout(() => setFlag(false), 3000);
          }}
        >
          {(props) => (
            <FormContainer>
              <TitleForm>Formulario Hogar transitorio</TitleForm>
              <Camp>
                <Sub>¿Qué es un hogar transitorio?</Sub>
              </Camp>
              <SubText>
                Los hogares transitorios son casas de personas que cuidan animales
                por un período de tiempo determinado, hasta que el animal
                encuentre la persona indicada que lo adopte definitivamente.
              </SubText>
              <SubText>
                Los hogares de tránsito ayudan mucho a los animales a sobrellevar
                una situación difícil en un momento dado, por ejemplo; cuando se
                le ofrece tránsito a un animal maltratado hasta que éste se
                recupera por completo, o cuando se crían cachorros que hayan
                perdido a su madre.
              </SubText>
              <SubText>
                Podés ofrecerte como hogar transitorio si contás con las ganas, el
                tiempo y el lugar para ayudar a un animal en ese momento donde
                está más vulnerable, aunque no estés en condiciones de adoptar
                definitivamente al animal. ¡Ofrecer tránsito también ayuda!
              </SubText>

              <Forms>
                {console.log(props.errors)}
                {console.log("abajo values")}
                {console.log(props.values)}
                <ContainerCamp>
                  <Camp>
                    <ImagePet
                      src={pet?.image}
                      alt={pet.name}
                      width="600"
                      height="400"
                    />
                    <Label>
                      Macota elegida: {pet.name}
                      {/* {pet?.name[0].toUpperCase() +
                      pet?.name.slice(1).toLowerCase()} */}
                    </Label>
                  </Camp>
                  <Camp>
                    <Label>
                      {" "}
                      Nombre y apellido del adoptante:{" "}
                      {user && user.name + " " + user.lastname}
                    </Label>
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
                      placeholder="Teléfono del postulante ( sin el cero + codigo de area + ... )"
                    />
                    <ErrorMessage
                      name="tel"
                      component={() => <div>{props.errors.tel}</div>}
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
                    <ErrorMessage
                      name="familySize"
                      component={() => <div>{props.errors.familySize}</div>}
                    />
                  </Camp>
                  <Camp>
                    <Label>
                      Composición del núcleo familiar (Relación y edades de las
                      Personas que viven en la casa) Nos permite saber si la
                      mascota es apta para tu hogar.
                    </Label>
                    <Input
                      type="text"
                      id="familyRelation"
                      name="familyRelation"
                      placeholder="Tu espuesta"
                    />
                    <ErrorMessage
                      name="familyRelation"
                      component={() => <div>{props.errors.familyRelation}</div>}
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
                  {props.values.otherPets === "true" && (
                    <>
                      <Camp>
                        <Label>¿Cuántos? ¿Cuentanos un poco sobre ellos?</Label>
                        <Input
                          type="text"
                          id="otherPetsInfo"
                          name="otherPetsInfo"
                          placeholder="Tu espuesta"
                        />
                        <ErrorMessage
                          name="otherPetsInfo"
                          component={() => (
                            <div>{props.errors.otherPetsInfo}</div>
                          )}
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
                    </>
                  )}
                  <Camp>
                    <Label>
                      <p>¿Dónde vivira la mascota en transito? {"("}Si es otra opción, escribila y presiona Create{")"}</p>
                    </Label>
                    <Supliers options={options2} name="adoptedPetPlace" />
                    <ErrorMessage
                      name="adoptedPetPlace"
                      component={() => <div>{props.errors.adoptedPetPlace}</div>}
                    />
                  </Camp>
                  <Camp>
                    <Label>
                      <p>¿Posee espacio al aire libre? {"("}Si es otra opción, escribila y presiona Create{")"}</p>
                    </Label>
                    <Supliers options={options3} name="openSpace" />
                    <ErrorMessage
                      name="openSpace"
                      component={() => <div>{props.errors.openSpace}</div>}
                    />
                  </Camp>
                  <Camp>
                    <Label>¿Son propietarios o alquilan?</Label>
                    <Label>
                      <Field type="radio" name="rental" value="owner" />{" "}
                      Propietario
                      <Field type="radio" name="rental" value="tenant" /> Alquilo
                    </Label>
                    <ErrorMessage
                      name="rental"
                      component={() => <div>{props.errors.rental}</div>}
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
                    <Label>¿Estará sola? ¿Cuánto tiempo?</Label>
                    <Input
                      type="text"
                      id="adoptedPetAloneMoments"
                      name="adoptedPetAloneMoments"
                      placeholder="Tu espuesta"
                    />
                    <ErrorMessage
                      name="adoptedPetAloneMoments"
                      component={() => (
                        <div>{props.errors.adoptedPetAloneMoments}</div>
                      )}
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
                    <ErrorMessage
                      name="adoptedPetWalkingInfo"
                      component={() => (
                        <div>{props.errors.adoptedPetWalkingInfo}</div>
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
                      component={() => <div>{props.errors.transitPetPeriod}</div>}
                    />
                  </Camp>
                  <Camp>
                    <Label>¿Por qué deseas dar tránsito a un animal?</Label>
                    <Input
                      type="text"
                      id="getPetReason"
                      name="getPetReason"
                      placeholder="Tu espuesta"
                    />
                    <ErrorMessage
                      name="getPetReason"
                      component={() => <div>{props.errors.getPetReason}</div>}
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
                    <ErrorMessage
                      name="adaptationTime"
                      component={() => <div>{props.errors.adaptationTime}</div>}
                    />
                  </Camp>
                  <Camp>
                    <Label>¿Tiene movilidad para buscar a la mascota?</Label>
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
                  <ButtonSubmit type="submit">Enviar</ButtonSubmit>
                  {flag && <Succes>Envio exitoso</Succes>}
                </ContainerButton>
              </Forms>
            </FormContainer>
          )}
        </Formik>
      </div>
    </BackgroundForm>
  );
}

const newLabel = (name) => {
  if (name === "userAge") return "Edad es requerido";
  if (name === "actualPlaceDirection") return "Dirección es requerido";
  if (name === "actualPlaceHood") return "Barrio es requerido";
  if (name === "actualPlaceCity") return "Ciudad es requerido";
  if (name === "actualPlaceProvince") return "Provincia es requerido";
  if (name === "actualPlacePostalCode") return "Codigo Postal es requerido";
  if (name === "tel") return "Teléfono es requerido";
  if (name === "familySize") return "Debe completar este campo";
  if (name === "familyRelation") return "Debe completar este campo";
  if (name === "otherPets") return "Debe completar este campo";
  if (name === "otherPetsInfo") return "Debe completar este campo";
  if (name === "otherPetsCastration") return "Debe completar este campo";
  if (name === "otherPetsVacunation") return "Debe completar este campo";
  if (name === "getPetReason") return "Debe completar este campo";
  if (name === "adoptedPetPlace") return "Debe completar este campo";
  if (name === "openSpace") return "Debe completar este campo";
  if (name === "rental") return "Debe completar este campo";
  if (name === "adoptedPetSleepingSpace") return "Debe completar este campo";
  if (name === "adoptedPetAloneMoments") return "Debe completar este campo";
  if (name === "adoptedPetWalkingInfo") return "Debe completar este campo";
  if (name === "userMovingIdea") return "Debe completar este campo";
  if (name === "adaptationTime") return "Debe completar este campo";
  if (name === "userMovility") return "Debe completar este campo";
  if (name === "transitPetPeriod") return "Debe completar este campo";
  if (name === "userAgreement") return "Debe completar este campo";
};
