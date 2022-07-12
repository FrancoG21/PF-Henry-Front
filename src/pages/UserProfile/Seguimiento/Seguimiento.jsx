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

  const [json, setJson] = useState({ images: [] });

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

          if(!values.description){ errors.description='skeree'}
          if(!values.image){ errors.image='skeree'}

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
              Swal.fire("Felicidades", "Tu seguimiento se cargo correctamente.", "success");
                console.log('fornulario enviado')
                console.log(values)
              setJson({ images: [] });
              resetForm();
            }
          });

          /* setTimeout(() => setFlag(false), 3000); */
        }}
      >
        {(props) => (
          <FormContainer>
              {console.log('image', props.image)}
              {console.log('description', props.description)}
            <TitleForm>Cargar tu seguimiento</TitleForm>
            <Forms>
              <ContainerCamp>
                <Camp>
                  <Label>Descripción</Label>                  
                  <Field as='textarea' id={'a'} name='description' rows="8" cols="85"/>
                  <ErrorMessage
                    name="description"
                    component={() => <div>{props.errors.description}</div>}
                  />
                </Camp>
                <Camp>
                  <Label>Imagenes de la mascota</Label>
                  <ImageUploader json={json} setJson={setJson} />
                  <ErrorMessage
                    name="image"
                    component={() => <div>{props.errors.image}</div>}
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
