import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loginManual} from '../../redux/actions/index';
// import {loginManual} from '../../../redux/actions/index'
import {useState} from 'react'
import{useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import s from './login.module.css'
import Swal from "sweetalert2";
import { useEffect } from 'react'

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
    const handleSubmit =(e) =>{
      e.preventDefault();
      dispatch(loginManual(input))
      if(input.email !== '' && input.password !== '') {
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

    const handleChange = function(e) {
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

    const google = ()=>{
       window.open('http://localhost:3001/auth/google/callback', '_self');
    }
    console.log('google', google)
      
      return (
      <form  onSubmit={(e) => handleSubmit(e)}>
        <div className={s.login}>
            
          <h1 className={s.loginTitle}>Choose a Login Method</h1>
          <div className={s.wrapper}>
            <div className={s.left}>
              <div className={s.loginButton} onClick={google}>
                <img  alt="img" className={s.icon} />
                  Google
              </div>
            </div>
            <div className={s.center}>
              <div className={s.line} />
              
              <div className={s.or}>OR</div>
            </div>
            <div className={s.right}>
              <input type="text" value={input.email} placeholder="email" name="email" onChange={handleChange}/>
              {errors.email && <p className={s.error}>{errors.email}</p>}
           
              <input  type="password" value={input.password} placeholder="password" name="password" onChange={handleChange}/>
              {errors.password && <p className={s.error}>{errors.password}</p>}
              <button type="submit" className={s.submit}>Login</button>
            </div>
            <div className={s.regist}>
                <Link to={'/register'}>
                  Register
                </Link>
            </div>
          </div>
        </div>
         </form>
      );
    };