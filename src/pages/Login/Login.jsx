import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import GoogleButton from 'react-google-button'
import { getLogOut, loginManual } from '../../redux/actions/index';
// import {loginManual} from '../../../redux/actions/index'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
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

  const user = useSelector((state) => state.usuario)
  const urlBack = useSelector((state) => state.urlBack)
  const history = useNavigate()
  const dispatch = useDispatch()

  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    email: '',
    password: ''
  })

  // const responseGoogle = async (response) => {
  //   const objGoogle = {
  //     ...response.profileObj,
  //     tokenId: response.tokenId
  //   }
    
  //   const result = await axios.post (
  //     "http://localhost:3001/google",
  //     objGoogle
  //   )
  //   console.log(result)
  // }
  async function handleCredentialResponse(response) {
    const res = await axios.post(`/user/loginGoogle`, {token: response.credential});
    console.log(res)
    localStorage.setItem("userInfo", JSON.stringify(response.credential))
    dispatch(loginManual(response.credential))
  }

  function logOutGoogle(){
    google.accounts.id.disableAutoSelect();
    console.log('logout')
    dispatch(getLogOut())
  }

  useEffect(()=>{
    /*google google*/
      google.accounts.id.initialize({
        client_id: "1028519940337-g0k86eebnu3s23dhvn2d1q32l1rg46sr.apps.googleusercontent.com",
        callback: handleCredentialResponse
      });
      google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" }  // customization attributes
      );
      google.accounts.id.disableAutoSelect();
      
    },[user])
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.email === '' && input.password === '') {
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Completa lo campos!',
        showConfirmButton: false,
        timer: 1500
      })
    }

    const res = await axios.post(`/user/login`, input)

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
      title: 'Sesion iniciada!',
      showConfirmButton: true,
      timer: 1500
    })

    localStorage.setItem("userInfo", JSON.stringify(res.token))

    setInput({
      email: '',
      password: ''
    })

    dispatch(loginManual(token))
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

  // const google = () => {
  //   window.location.replace(url + '/auth/google/callback', '_self');
  // }
  // console.log('google', google)

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
        </Form>
        { !user 
            ? <div id='buttonDiv'>holu</div>
            : <>
              <button className="g_id_signout" onClick={logOutGoogle}> log out google </button>
              <p>{user.name}</p>
            </>
        }
          
      </Wrapper>
    </BackgroundLogin>
  );
};
