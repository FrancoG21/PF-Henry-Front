import React from 'react'
import icono from '../../../pages/img/chat.png'
import style from './icon.module.css'
import { useNavigate } from 'react-router-dom'

export default function Icono() {


    const history =  useNavigate()

  function Click(){
  history('/chatbot')
    
}
  return (
    <div>
          <button onClick={Click} className={style.boton}type="button">{
            <img src={icono} alt='imagen'width='30' height='30' />
          }</button>
    </div>
  )
}
