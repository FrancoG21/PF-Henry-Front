import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { petitionLoad } from "../../../redux/actions/index";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Supliers from "./Supliers";
import moment from "moment";
import {
  Formik,
  Field,
  ErrorMessage,
  useFormikContext,
  useField,
} from "formik";
import {
  BackgroundForm,
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
  BackIcon,
} from "./StyledPetCreate";
import axios from "axios";
import ImageUploader from "./imagenes/ImagesUploader";
import Swal from "sweetalert2";
/* import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom' */

//const REACT_APP_UPLOADCARE_API_PUBLIC_KEY = "68e94b1b1f48a7211e1f";
/* var widgets = uploadcare.initialize('#my-form');
widgets; // [widget1, widget2, multipleWidget1, ...]
var widgets = uploadcare.initialize();
var widget = uploadcare.Widget('[role=uploadcare-uploader]');
var file = widget.value(); */

//const widget = uploadcare.Widget("#uploader", { publicKey: '68e94b1b1f48a7211e1f' });

const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <DatePicker
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      onChange={(val) => {
        const valString = val ? val /* .toISOString().slice(0, 10) */ : null;
        setFieldValue(field.name, valString);
      }}
    />
  );
};

/* const OtherBreedSelect = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [otherBreed, setOtherBreed] = useState(""); //este estado era para que escuche si breed esta en other
  const [field] = useField(props);
  return (
    <>
      <Field
        name={props.name}
        type="text"
        onChange={(val) => {
          setOtherBreed(val);
        }}
      />
      <button type="submit">add breed</button>
    </>
  );
}; */

export default function PetCreate() {
  const todayDate = new Date().toISOString(); /* .slice(0, 10) */
  //minuto 42:40 video usa form, field, etc
  // 47:28 con que otros tags se puede trabajar ??

  const dispatch = useDispatch();
  const [flag, setFlag] = useState(false);
  const [breeds, setBreeds] = useState([]);
  const [petType, setPetType] = useState("dog");
  const [urlImage, setUrlImage] = useState([]);

  const [user, setUser] = useState(null)

  const [json, setJson] = useState({ images: [] });

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
    axios.get(`/breed?pet=${petType}`).then((r) => setBreeds(r.data)); //setBreeds(r.data))
  }, [petType]);

  useEffect(() => {
    decodeToken()
  }, [])

  let isUrl =
    /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!]))?/;
  function capitalize(str) {
    return str.replace(/^\w/, (c) => c.toUpperCase());
  }

  const handleClickPetTypeBreeds = (type) => {
    setPetType(type);
  };

  const callBackImage = (arrUrls) => {
    console.log("entre a callBackImage");
    setUrlImage(arrUrls);
    console.log(urlImage);
  };

  const [finalBreed, setFinalBreed] = useState("");
  const callbackBreeds = (value) => {
    setFinalBreed(value);
    console.log(`callbackBreeds -> ${finalBreed}`);
  };

  return (
    <BackgroundForm>
      <div>
        <Link to={`/adopt`}>
          <BackIcon />
        </Link>
        <Formik
          initialValues={{
            name: "", //string 255 caracteres
            pet: "", // cat or dog
            image: "", //string 255 caracteres --> despues va a ser un array
            size: "", // small, medium, big
            weight: "", //
            fur: "", // short or long
            breed: "", // crossbreed
            gender: "", // female or male
            castration: "", // true or false
            vaccinate: "", // true or false
            state: "", //adopt or lost
            foundDate: null,
            foundPlace: "",
            actualPlace: "", // ---> array
            formDate: moment().format("DD/MM/YYYY"),
            actualPlaceDirection: "",
            actualPlaceHood: "",
            actualPlaceCity: "",
            actualPlaceProvince: "Cordoba",
            actualPlacePostalCode: "",
            userId: user && user.id
          }}
          validate={(values) => {
            let errors = {};
            // if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
            /* if (
              !/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!]))?/.test(
                values.image
              )
            )
              errors.image = "Image must be a valid URL"; */
            if (!values.state) errors.complete = 'no hay nada completado'
            if (values.state) delete errors.complete

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

              if (json.images.length > 0) {
                values.image = json.images;
              }
              if (json.images.length === 0) {
                values.image = "";
              }

              if (values.state === "adopt" && !values[prop]) {
                errors[prop] = `${newLabel(prop)}`;
              }

              if (values.state === "adopt") {
                for (let prop in errors) {
                  if (
                    prop === "foundPlace" ||
                    prop === "actualPlaceDirection" ||
                    prop === "actualPlaceHood" ||
                    prop === "actualPlaceCity" ||
                    prop === "actualPlaceProvince" ||
                    prop === "actualPlacePostalCode" ||
                    prop === "foundDate" ||
                    prop === "actualPlace"
                  ) {
                    delete errors[prop];
                  }
                }
              }

              if (values.state === "lost" && !values[prop]) {
                errors[prop] = `${newLabel(prop)}`;
                delete errors.actualPlace;
              }

              if (
                values.state === "lost" ||
                (values.state === "adopt" && !errors.name)
              ) {
                if (!/^[a-z]+$/g.test(values.name))
                  errors.name = "Nombre solo acepta minuscula";
              }
            }

            if (user) {
              values.userId = user.id
              delete errors.userId
            }

            console.log(errors);
            console.log("abajo values");
            console.log(values);
            return errors;
          }}
          onSubmit={(values, { resetForm }) => {
            console.log(values);

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
            if (values.foundDate) {
              values.foundDate = values.foundDate
                .toISOString()
                .slice(0, 10)
                .split("-")
                .reverse()
                .join("/");
            }

            if (values.state === "adopt") {
              delete values.actualPlace;
              delete values.foundDate;
              delete values.foundPlace;
            }

            if (values.breed) {
              values.breed = values.breed.label;
            }

            console.log(values);
            dispatch(petitionLoad(values));
            resetForm();
            setJson({ images: [] });
            setFlag(true);
            console.log("formulario enviado");
            setTimeout(() => setFlag(false), 3000);
          }}
        >
          {(props) => (
            <FormContainer>
              <TitleForm>Carga tu mascota</TitleForm>
              <Forms>
                <ContainerCamp>
                  <Camp>
                    <Label>¿Qué quieres hacer?</Label>
                    <Label>
                      <Field type="radio" name="state" value="adopt" /> Dar una
                      mascota en adopción
                      <Field type="radio" name="state" value="lost" /> Cargar una
                      mascota que encontraste
                    </Label>
                    <ErrorMessage
                      name="state"
                      component={() => <div>{props.errors.state}</div>}
                    />
                  </Camp>
                  <Camp>
                    <Label>Nombre</Label>
                    <Input //maneja todo solo con el name=
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Nombre de la mascota"
                    />
                    <ErrorMessage
                      name="name"
                      component={() => <div>{props.errors.name}</div>}
                    />
                  </Camp>
                  <Camp>
                    <Label>Imagen de la mascota</Label>
                    <ImageUploader json={json} setJson={setJson} />
                    <ErrorMessage
                      name="image"
                      component={() => <div>{props.errors.image}</div>}
                    />
                  </Camp>
                  <Camp>
                    <Label>Que tipo de animal es ?</Label>
                    <Label>
                      <Field
                        type="radio"
                        name="pet"
                        value="dog"
                        onClick={() => handleClickPetTypeBreeds("dog")}
                      />{" "}
                      Perro
                      <Field
                        type="radio"
                        name="pet"
                        value="cat"
                        onClick={() => handleClickPetTypeBreeds("cat")}
                      />{" "}
                      Gato
                    </Label>
                    <ErrorMessage
                      name="pet"
                      component={() => <div>{props.errors.pet}</div>}
                    />
                  </Camp>
                  <Camp>
                    <Label>Raza</Label>
                    <Supliers breeds={breeds} name="breed" />
                    <ErrorMessage
                      name="breed"
                      component={() => <div>{props.errors.breed}</div>}
                    />
                  </Camp>
                  <Camp>
                    <Label>Peso</Label>
                    <Input
                      type="number"
                      id="weight"
                      name="weight"
                      placeholder="Peso de la mascota"
                    />
                    <ErrorMessage
                      name="weight"
                      component={() => <div>{props.errors.weight}</div>}
                    />
                  </Camp>
                  <Camp>
                    <Label>Tamaño</Label>
                    <Label>
                      <Field type="radio" name="size" value="small" /> Chico
                      <Field type="radio" name="size" value="medium" /> Mediano
                      <Field type="radio" name="size" value="big" /> Grande
                    </Label>
                    <ErrorMessage
                      name="size"
                      component={() => <div>{props.errors.size}</div>}
                    />
                  </Camp>
                  <Camp>
                    <Label>Pelaje</Label>
                    <Label>
                      <Field type="radio" name="fur" value="short" /> Corto
                      <Field type="radio" name="fur" value="long" /> Largo
                    </Label>
                    <ErrorMessage
                      name="fur"
                      component={() => <div>{props.errors.fur}</div>}
                    />
                  </Camp>
                  <Camp>
                    <Label>Genero</Label>
                    <Label>
                      <Field type="radio" name="gender" value="male" /> Macho
                      <Field type="radio" name="gender" value="female" /> Hembra
                      <Field type="radio" name="gender" value="unknown" />{" "}
                      Desconozco
                    </Label>
                    <ErrorMessage
                      name="gender"
                      component={() => <div>{props.errors.gender}</div>}
                    />
                  </Camp>
                  <Camp>
                    <Label>Esta castrada ?</Label>
                    <Label>
                      <Field type="radio" name="castration" value="true" /> Si
                      <Field type="radio" name="castration" value="false" /> No
                      <Field type="radio" name="castration" value="unknown" />
                      Desconozco
                    </Label>
                    <ErrorMessage
                      name="castration"
                      component={() => <div>{props.errors.castration}</div>}
                    />
                  </Camp>
                  <Camp>
                    <Label>Esta vacunada ?</Label>
                    <Label>
                      <Field type="radio" name="vaccinate" value="true" /> Yes
                      <Field type="radio" name="vaccinate" value="false" /> No
                      <Field type="radio" name="vaccinate" value="unknown" />
                      Desconozco
                    </Label>
                    <ErrorMessage
                      name="vaccinate"
                      component={() => <div>{props.errors.vaccinate}</div>}
                    />
                  </Camp>
                  {props.values.state === "lost" && (
                    <div>
                      <Camp>
                        <Label>Cuándo lo encontraste ?</Label>
                        <DatePickerField
                          name="foundDate"
                          isClearable
                          showYearDropdown
                          scrollableMonthYearDropdown
                          maxDate={new Date()}
                          dateFormat="dd/MM/yyyy"
                        />
                        <ErrorMessage
                          name="foundDate"
                          component={() => <div>{props.errors.foundDate}</div>}
                        />
                      </Camp>
                      <Camp>
                        <Label>Dónde la encontraste ?</Label>
                        <Input
                          type="text"
                          id="place"
                          name="foundPlace"
                          placeholder="Barrio, Calle, Altura"
                        />
                        <ErrorMessage
                          name="foundPlace"
                          component={() => <div>{props.errors.foundPlace}</div>}
                        />
                      </Camp>
                      <Label>Dónde se encuentra actualmente la mascota ?</Label>
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
                          component={() => (
                            <div>{props.errors.actualPlaceHood}</div>
                          )}
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
                          component={() => (
                            <div>{props.errors.actualPlaceCity}</div>
                          )}
                        />
                      </Camp>
                      <Camp>
                        <Label>
                          Provincia: *Por el momento solo es para la provincia de
                          Cordoba
                        </Label>
                        <Input
                          type="text"
                          id="actualPlaceProvince"
                          name="actualPlaceProvince"
                          placeholder="Provincia"
                          value="Cordoba"
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
                    </div>
                  )}
                </ContainerCamp>
                <ContainerButton>
                  <ButtonSubmit type="submit">Submit</ButtonSubmit>
                  {flag && <p>Succesfully created</p>}
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
  if (name === "name") return "Nombre es requerido";
  if (name === "pet") return "Tipo de mascota es requerida";
  if (name === "image") return "Al menos una imagen es requerida";
  if (name === "size") return "Tamaño es requerido";
  if (name === "weight") return "Peso es requerido";
  if (name === "fur") return "Pelaje es requerido";
  if (name === "breed") return "Raza es requerida";
  if (name === "gender") return "Genero es requerido";
  if (name === "castration") return "Castracion es requerida";
  if (name === "vaccinate") return "Vacunados es requerido";
  if (name === "foundDate") return "Fecha es requerida";
  if (name === "foundPlace") return "Lugar donde fue encontrada es requerido";
  if (name === "actualPlaceDirection") return "Direccion es requerida";
  if (name === "actualPlaceHood") return "Barrio es requerido";
  if (name === "actualPlaceCity") return "Ciudad es requerida";
  if (name === "actualPlaceProvince") return "Provincia es requerida";
  if (name === "actualPlacePostalCode") return "Codigo postal es requerido";
  if (name === "state") return "Debes seleccionar que quieres hacer";
};
