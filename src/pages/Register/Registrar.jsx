
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from "sweetalert2";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {postRegister,getUsers} from '../../redux/actions/index'
import {
  BackgroundLogin,
  Errors,
  Wrapper,
  Form,
  Input,
  Button,
} from './StyledRegister';




export default function Registrar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    dispatch(getUsers())
 }, [])

  const user = useSelector((state) => state.usuarios)

   console.log('estoy en user registrar', user)

   function validation(input) {
  
  
    let errors = {};
  
    if (!input.name) {
      errors.name = 'Nombre es requerido';
    } else if (!/^[A-Z]+[A-Za-z0-9\s]+$/g.test(input.name)) {
      errors.name = "Primer Letra debe ser mayuscula"
    }
    if (!input.lastname) {
      errors.lastname = 'Apellido es requerido';
    } else if (!/^[A-Z]+[A-Za-z0-9\s]+$/g.test(input.lastname)) {
      errors.lastname = "Primer Letra debe ser mayuscula"
    }
  
    if (!input.email) {
      errors.email = 'E-mail es requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input.email)) {
      errors.email = 'Direccion de correo incorrecta';
  }
  else if (user.find(e=>e.email.toLowerCase()===input.email.toLowerCase())) {
      errors.email = 'Este email ya esta registrado';}
  
    if (!input.password) {
      errors.password = "ejemplo: usuario123";
    } else if (
      
       !/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/i.test(input.password)
    ) {
      errors.password =
  'debe contener almenos 8 caracteres,incluyendo algun numero'  }
   
  if (!input.password2) {
    errors.password2 = "Campo requerido";
  }

 else if (input.password !== input.password2) {
    errors.password2 = "Las Contraseñas No Coinciden"
}
  
    return errors;
  }

  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    lastname: ''
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

    if (input.name !== '' && input.email !== '' && input.password && input.password2 !== '' && input.lastname !== '' && !errors.name && !errors.email && !errors.password  && !errors.password2  && !errors.lastname){
      dispatch(postRegister(input))
        //  const res = await axios.post(`/user/register`, input)
      
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'REGISTRADO CORRECTAMENTE',
      showConfirmButton: true,
      timer: 1500
    }).then(()=>{
      navigate("/login")
    })
     
    }
    else{
       return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Completa lo campos!',
        showConfirmButton: false,
        timer: 1000
      })
    }
 
   ;
  

    
    setInput({
      name: '',
      email: '',
      password: '',
      password2:'',
      lastname: ''
    })
  }

  return (
    <BackgroundLogin>
      <Wrapper>
        <Form onSubmit={(e) => handleRegister(e)}>
          <Input type="text" value={input.name} placeholder="Nombre" name="name" onChange={handleChange} />
          {errors.name && <Errors>{errors.name}</Errors>}

          <Input type="text" value={input.lastname} placeholder="Apellido" name="lastname" onChange={handleChange} />
          {errors.lastname && <Errors>{errors.lastname}</Errors>}

          <Input type="text" value={input.email} placeholder="Email" name="email" onChange={handleChange} />
          {errors.email && <Errors>{errors.email}</Errors>}

          <Input type="password" value={input.password} placeholder="Contraseña" name="password" onChange={handleChange} />
          {errors.password && <Errors>{errors.password}</Errors>}

          <Input type="password" value={input.password2} placeholder="Confirma tu Contraseña" name="password2" onChange={handleChange} />
          {errors.password2 && <Errors>{errors.password2}</Errors>}
          <Button type="submit">Register</Button>
        </Form>
      </Wrapper>
    </BackgroundLogin>
  );
}