import React from 'react'
import Google from "../../../img/google.png"
import {useDispatch} from 'react-redux'
import {loginManual} from '../../../redux/actions/index'
import {useState} from 'react'
import Swal from 'sweetalert2'
import {useSelector} from 'react-redux'
import{useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import s from './login.module.css'

export default function Login() {

    const resLogin = useSelector(state => state.usuario)
    const history = useNavigate()
  const dispatch = useDispatch()

  const [input, setInput] = useState({
      email: '',
      password: ''
  })


   


   
    function handleSubmit(e){
        e.preventDefault()
         dispatch(loginManual(input))
           if(!input.email || !input.password){
            alert('sigue intentando')
           }
           else{
          history('/userprofile')}
          
     
    }

    
   
      
     function handleChange (e){
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
      
     }



    const google = ()=>{
       window.open('http://localhost:3001/auth/google', '_self')
      
    }
  
    
      return (
      <form  onSubmit={(e) => handleSubmit(e)}>
        <div className={s.login}>
            
          <h1 className={s.loginTitle}>Choose a Login Method</h1>
          <div className={s.wrapper}>
            <div className={s.left}>
              <div className={s.loginButton} onClick={google}>
                <img src={Google} alt="img" className={s.icon} />
                  Google
              </div>
            </div>
            <div className={s.center}>
              <div className={s.line} />
              <div className={s.or}>OR</div>
            </div>
            <div className={s.right}>
              <input type="text" value={input.nombre} placeholder="email" name="email" onChange={handleChange}/>
           
              <input  type="password" value={input.contraseña} placeholder="password" name="password" onChange={handleChange}/>
              <button type="submit" className={s.submit}>Login</button>
            </div>
            <div className={s.regist}>
                <Link to={'/registrar'}>
                Registrate
                </Link>
            </div>
          </div>
        </div>
         </form>
      );
    };
