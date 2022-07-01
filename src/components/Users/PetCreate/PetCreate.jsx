import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Uploadcare from "./UploadCare";
import { createPet } from "../../../redux/actions/index";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import uploadcare from "uploadcare-widget";
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
        console.log("antes de valString", val);
        const valString = val ? val /* .toISOString().slice(0, 10) */ : null;
        setFieldValue(field.name, valString);
        console.log("sali de DatePickerField", valString);
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
  const [skere, setSkere] = useState("");

  useEffect(() => {
    axios.get(`/breed?pet=${petType}`).then((r) => setBreeds(r.data)); //setBreeds(r.data))
  }, [petType]);

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
    <>
      <Formik
        initialValues={{
          name: "", //string 255 caracteres
          pet: "", // cat or dog
          image: "imagen harcodeada", //string 255 caracteres
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
          actualPlace: "",
          formDate: moment().format("L"),
          actualPlaceDirection: "",
          actualPlaceHood: "",
          actualPlaceCity: "",
          actualPlaceProvince: "Cordoba",
          actualPlacePostalCode: "",
        }}
        validate={(values) => {
          let errors = {};
          // if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
          if (!/^[a-z]+$/g.test(values.name))
            errors.name = "Name only allows lower case letters";
          /* if (
            !/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!]))?/.test(
              values.image
            )
          )
            errors.image = "Image must be a valid URL"; */

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
              errors[prop] = `${capitalize(prop)} is required`;
              delete errors.actualPlace;
            }
          }
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

          if (values.state === "adopt") {
            (values.actualPlace = ""),
              (values.foundDate = ""),
              (values.foundPlace = "");
          }

          if (values.breed) {
            values.breed = values.breed.label;
          }

          if (values.foundDate) {
            values.foundDate = values.foundDate.toISOString().slice(0, 10);
          }

          console.log(values);
          dispatch(createPet(values));
          resetForm();
          setFlag(true);
          console.log("formulario enviado");
          setTimeout(() => setFlag(false), 3000);
        }}
      >
        {(props) => (
          <FormContainer>
            <TitleForm>Carga tu mascota</TitleForm>
            <Forms>
              {/* {console.log(props.values)}
              <br />
              <div>{JSON.stringify(props.errors)}</div>
              <br /> */}
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
                  {/*  <Input
                    type="text"
                    id="image"
                    name="image"
                    placeholder="Pet Image"
                  />
                  {props.values.image && (
                    <img src={props.values.image} alt={`imagen de: ${props.values.name}`} />
                  )}
                  <ErrorMessage
                    name="image"
                    component={() => <div>{props.errors.image}</div>}
                  /> */}
                </Camp>
                <Camp>
                  {/* <Uploadcare callBackImage={callBackImage}/>  */}
                  {/* <input
                    type="hidden"
                    role="uploadcare-uploader"
                    data-public-key="demopublickey"
                    data-images-only
                  />  */}
                </Camp>
                <ErrorMessage
                  name="image"
                  component={() => <div>{props.errors.image}</div>}
                />
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
