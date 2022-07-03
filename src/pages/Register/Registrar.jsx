
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getRegister } from '../../redux/actions';

export default function Registrar() {
  const dispatch = useDispatch()
  const [input, setInput] = useState();

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(getRegister(input))
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