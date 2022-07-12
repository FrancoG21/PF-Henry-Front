import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import ImageUploader from "../../../components/Users/PetCreate/imagenes/ImagesUploader";
import axios from "axios";
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
} from "./StyledSeguimiento";

export default function Seguimiento() {
  const { id } = useParams();
  const [pet, setPet] = useState();

  const [json, setJson] = useState({ images: [] });

  function capitalize(str) {
    return str.replace(/^\w/, (c) => c.toUpperCase());
  }

  const callBackIn = async () => {
    try {
      const { data } = await axios.get(`/pet/${id}`);
      setPet(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    callBackIn();
  }, []);

  return (
    <BackgroundForm>
      <Formik
        initialValues={{
          token: localStorage.getItem("userInfo"),
          image: [],
          description: "",
          petId: id,
        }}
        validate={(values) => {
          let errors = {};

          if (!values.description) {
            errors.description = "Debe agregar una descripción.";
          }
          if (!values.image) {
            errors.image = "Debe agregar una imagen, maximo tres.";
          }

          if (json.images.length > 0) {
            values.image = json.images;
          }
          if (json.images.length === 0) {
            values.image = "";
          }

          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          Swal.fire({
            title: "Estas seguro?",
            text: "No podras revertir los cambios!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonText: "Cancelar",
            cancelButtonColor: "#d33",
            confirmButtonText: "Cargar",
          }).then((result) => {
            if (result.isConfirmed) {
              console.log("fornulario enviado");
              console.log(values);
              axios
                .post(`/tracking`, {
                  token: values.token,
                  image: values.image,
                  description: values.description,
                  petId: values.petId,
                })
                .then(
                  Swal.fire(
                    "Felicidades",
                    "Tu seguimiento se cargo correctamente.",
                    "success"
                  )
                );
              setJson({ images: [] });
              resetForm();
              /* setTimeout(() => (location.href = `/userprofile`), 1000); */
            }
          });

          /* setTimeout(() => setFlag(false), 3000); */
        }}
      >
        {(props) => (
          <FormContainer>
            {console.log("image", props.image)}
            {console.log("description", props.description)}
            {console.log("pet", pet)}
            <TitleForm>
              Cargá el seguimiento de{" "}
              {pet ? capitalize(pet.name) : "tu mascota"}
            </TitleForm>
            <h3>
              El seguimiento nos ayuda a ver como esta{" "}
              {pet ? capitalize(pet.name) : "tu mascota"} y mostrar que todas
              las mascotas pueden volver a compartir su cariño con las personas
              que les den la oportunidad de hacerlo. Publicaremos este
              seguimiento en la página principal.
            </h3>
            <Forms>
              <ContainerCamp>
                <Camp>
                  <Label>Imágenes de la mascota</Label>
                  <ImageUploader json={json} setJson={setJson} />
                  <ErrorMessage
                    name="image"
                    component={() => <div>{props.errors.image}</div>}
                  />
                </Camp>
                <Camp>
                  <Label>Descripción</Label>
                  <Field
                    as="textarea"
                    id={"description"}
                    name="description"
                    rows="8"
                    cols="85"
                  />
                  <ErrorMessage
                    name="description"
                    component={() => <div>{props.errors.description}</div>}
                  />
                </Camp>
              </ContainerCamp>
              <ContainerButton>
                <ButtonSubmit type="submit">Cargar</ButtonSubmit>
              </ContainerButton>
            </Forms>
          </FormContainer>
        )}
      </Formik>
    </BackgroundForm>
  );
}
