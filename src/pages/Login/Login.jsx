import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import GoogleButton from 'react-google-button'
import { loginManual } from '../../redux/actions/index';
// import {loginManual} from '../../../redux/actions/index'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import s from './login.module.css'
import Swal from "sweetalert2";
import {
  BackgroundLogin,
  Errors,
  Wrapper,
  Form,
  Input,
  Button,
  Acces,
} from './StyledLogin';

export function validation(input) {
  let errors = {};

  if (!input.email) {
    errors.email = "Email es requerido";
  } else if (
    !input.email.match(
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    )
  ) {
    errors.email = "Ingrese un correo válido";
  }

  if (!input.password) {
    errors.password = "Contraseña es requerida";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/i.test(
      input.password
    )
  ) {
    errors.password =
      "Minimo 8 carateres, maximo 15, al menos una letra mayuscula, al menos una letra minuscula, al menos 1 digito, al menos un caracter especial";
  }

  return errors;
}



export default function Login() {

  const resLogin = useSelector((state) => state.usuario)
  const urlBack = useSelector((state) => state.urlBack)
  console.log("LOGINUSER", resLogin);
  const history = useNavigate()
  const dispatch = useDispatch()

  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    email: '',
    password: ''
  })

  // const handleSubmit = async(e) =>{
  //     e.preventDefault()
  //     if (input.email !== "" && input.password !== "") {
  //       const token = await axios.post(`/user/login`, input);

  //       const usuario = resLogin.find((user) => user.email === input.email);
  //       if (token.data.user) {
  //         dispatch(loginManual(input))
  //         if (usuario.admin.filter((r) => r.type === "admin").length > 0)
  //         history('/userprofile')
  //         else history('/userprofile');
  //       } else {
  //         if (!token.data.user) alert("Email/password incorrecto");
  //       }
  //     } else {
  //       alert("Debes rellenar todos los campos antes de loguearte");
  //     }
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginManual(input))
    if (input.email !== '' && input.password !== '') {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Inicio de sesión exitoso!',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Completa lo campos!',
        showConfirmButton: false,
        timer: 1500
      })
    }
    setInput({
      email: '',
      password: ''
    })
  }

  const handleChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validation({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const google = () => {
    window.location.replace(url + '/auth/google/callback', '_self');
  }
  console.log('google', google)

  return (
    <BackgroundLogin>
      <Wrapper>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Input type="text" value={input.email} placeholder="Email" name="email" onChange={handleChange} />
          {errors.email && <Errors>{errors.email}</Errors>}

          <Input type="password" value={input.password} placeholder="Password" name="password" onChange={handleChange} />
          {errors.password && <Errors>{errors.password}</Errors>}
          <Button type="submit">Login</Button>
          <Button>
            <Acces to={'/register'}>
              Register
            </Acces>
          </Button>
          {/* <GoogleButton
            label='Be Cool'
            onClick={google}
          /> */}
        </Form>
      </Wrapper>
    </BackgroundLogin>
  );
};
