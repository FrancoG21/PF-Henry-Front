import React from 'react'
import s from '../login/Registrar.module.css';

export default function Registrar() {
  return (

    
    <div class="container">
   
    <div class="form form--signup">
      <div class="form--heading">Welcome! Sign Up</div>
      <form autocomplete="off">
        <input type="text" placeholder="Name"/>
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Password"/>
        <button class="button">Sign Up</button>
      </form>
    </div>
    
  </div>
  )
}
