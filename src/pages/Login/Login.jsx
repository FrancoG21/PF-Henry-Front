import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import GoogleButton from 'react-google-button'
import { getLogOut, loginManual } from '../../redux/actions/index';
// import {loginManual} from '../../../redux/actions/index'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import  GoogleLogin  from 'react-google-login'
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

  const user = useSelector((state) => state.usuario)
  const urlBack = useSelector((state) => state.urlBack)
  const resLogin = useSelector((state) => state.usuario)
  console.log("LOGINUSER", resLogin);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    email: '',
    password: ''
  })

  async function handleCredentialResponse(response) {
    const res = await axios.post(`/user/loginGoogle`, {token: response.credential});
    localStorage.setItem("userInfo", JSON.stringify(response.credential))
    dispatch(loginManual(response.credential))
    
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Sesion iniciada!',
      showConfirmButton: true,
      timer: 1500
    }).then(()=>{
      navigate("/")
    })
  }

  useEffect(()=>{
    /*google google*/
      google.accounts.id.initialize({
        client_id: "1028519940337-g0k86eebnu3s23dhvn2d1q32l1rg46sr.apps.googleusercontent.com",
        callback: handleCredentialResponse
      });
      google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "medium" }  // customization attributes
      );
      google.accounts.id.disableAutoSelect();
      
    },[user])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.email === '' && input.password === '') {
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Completa todos los campos!',
        showConfirmButton: false,
        timer: 1500
      })
    }

    const res = await axios.post(`/user/login`, input)
    console.log(res)
    if(res.data.error){
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: res.data.error,
        showConfirmButton: false,
        timer: 1000
    })
    }

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Sesion iniciada!',
      showConfirmButton: true,
      timer: 1500
    }).then(()=>{
      navigate("/")
    })

    localStorage.setItem("userInfo", JSON.stringify(res.data.token))

    setInput({
      email: '',
      password: ''
    })

    dispatch(loginManual(res.data.token))
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
  
// function responseGoogle(response) {
//   console.log('responseGoogle', response)
// }
// function alert(result) {
//  console.log(result)
// }

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
          <br/>
        { !user && <div id='buttonDiv'>holu</div> }
        </Form>
      </Wrapper>
    </BackgroundLogin>
  );
};
