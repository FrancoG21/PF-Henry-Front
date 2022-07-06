import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import GoogleButton from 'react-google-button'
import { loginManual } from '../../redux/actions/index';
// import {loginManual} from '../../../redux/actions/index'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import  GoogleLogin  from 'react-google-login'
// import s from './login.module.css'
import Swal from "sweetalert2";
import axios from 'axios'
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
  }
  //  else if (
  //   !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/i.test(
  //     input.password
  //   )
  // ) {
  //   errors.password =
  //     "Minimo 8 carateres, maximo 15, al menos una letra mayuscula, al menos una letra minuscula, al menos 1 digito, al menos un caracter especial";
  // }

  return errors;
}



export default function Login() {

  const resLogin = useSelector((state) => state.usuario)
  console.log("LOGINUSER", resLogin);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input)
    
    /* if(errors.email || errors.password) return */

    if (input.email === '' || input.password === '') {
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Completa todos los campos!',
        showConfirmButton: false,
        timer: 1500
      })
    }
    
    const res = await axios.post(`/user/login`, input).then(e=> e.data, r=> {return r.response.data});

    if(res.error === 'password'){
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Contraseña incorrecta!',
        showConfirmButton: false,
        timer: 1500
      }) 
    } 
    if(res.error === 'mail'){
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Mail no encontrado!',
        showConfirmButton: false,
        timer: 1500
      })
    }

    console.log(res)
    dispatch(loginManual(res))
    localStorage.setItem("userInfo", JSON.stringify(res))

    setInput({
      email: '',
      password: ''
    })
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Inicio de sesión exitoso!',
      showConfirmButton: true,
      timer: 3000
    }).then(()=>{
      navigate('/')
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
// const url = 'http://localhost:3001'
//   const google = () => {
//     window.location.replace(url + '/auth/google/callback', '_self');
//   }
//   console.log('google', google)
  
//   const logout = () => {
//     window.location.replace(url + '/auth/google/callback', '_self');
//   }
  
function responseGoogle(response) {
  console.log('responseGoogle', response)
}
function alert(result) {
 console.log(result)
}


  return (
    <BackgroundLogin>
      <Wrapper>  
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Input type="text" value={input.email} placeholder="Email" name="email" onChange={handleChange} />
          {errors.email && <Errors>{errors.email}</Errors>}
          

          {/* <GoogleLogin
    clientId="6229358800-jmcgp4kol677o5qvhs02hnkaclvk1174.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={alert}
    cookiePolicy={'single_host_origin'}
  /> */}



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
