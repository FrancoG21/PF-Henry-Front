
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import Swal from "sweetalert2";
import axios from 'axios'
import {
  BackgroundLogin,
  Errors,
  Wrapper,
  Form,
  Input,
  Button,
} from './StyledRegister';


export function validation(input) {
  let errors = {};

  if (!input.name) {
    errors.name = 'Nombre es requerido';
  } else if (input.name.length > 50) {
    errors.name = "El nombre es muy largo (Max = 50 letras)"
  }

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

export default function Registrar() {
  const dispatch = useDispatch()

  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
  })
  // hokla
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

  const handleRegister = async (e) => {
    e.preventDefault();
    if (input.name === '' && input.email === '' && input.password === '')  {
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Completa lo campos!',
        showConfirmButton: false,
        timer: 1000
      })
    }

    const res = await axios.post(`/user/register`, input);
    
    console.log(res)
    if(res.error){
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: res.error,
        showConfirmButton: false,
        timer: 1000
    })
    }

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: res.data.message,
      showConfirmButton: true,
      timer: 1500
    })
    setInput({
      name: '',
      email: '',
      password: ''
    })
  }

  console.log("input register", input)
  return (
    <BackgroundLogin>
      <Wrapper>
        <Form onSubmit={(e) => handleRegister(e)}>
          <Input type="text" value={input.name} placeholder="Name" name="name" onChange={handleChange} />
          {errors.name && <Errors>{errors.name}</Errors>}

          <Input type="text" value={input.email} placeholder="Email" name="email" onChange={handleChange} />
          {errors.email && <Errors>{errors.email}</Errors>}

          <Input type="password" value={input.password} placeholder="Password" name="password" onChange={handleChange} />
          {errors.password && <Errors>{errors.password}</Errors>}
          <Button type="submit">Register</Button>
        </Form>
      </Wrapper>
    </BackgroundLogin>
  );
}