
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getRegister } from '../../redux/actions';
import Swal from "sweetalert2";
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
    // !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/i.test(
    //   input.password
    // )
    //  !/^[A-Z]+[A-Za-z0-9\s]+$/g.test(input.password)
     !/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/i.test(input.password)
  ) {
    errors.password =
'debe contener almenos 8 caracteres'  }

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

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(getRegister(input))
    if (input.name !== '' && input.email !== '' && input.password !== '' && !errors.name && !errors.email && !errors.password) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registro exitoso!',
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