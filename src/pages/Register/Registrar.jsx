
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getRegister } from '../../redux/actions';
import Swal from "sweetalert2";

export default function Registrar() {
  const dispatch = useDispatch()
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
})

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(getRegister(input))
    if(input.name !== '' && input.email !== '' && input.password !== '') {
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
    <main class="container">

      <div class="form form--signup">
        <div class="form--heading">Welcome! Sign Up</div>
        <form autocomplete="off" onSubmit={(e) => handleRegister(e)}>
          <input type="text" placeholder="Name" name="name" onChange={handleChange} />
          <input type="email" placeholder="Email" name="email" onChange={handleChange} />
          <input type="password" placeholder="Password" name="password" onChange={handleChange} />
          <button class="button">Sign Up</button>
        </form>
      </div>

    </main>
  )
}