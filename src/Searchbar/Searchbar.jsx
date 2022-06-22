import React from 'react'
import {useDispatch} from 'react-redux'
import {useState} from 'react'
import {searchByName} from '../redux/actions/index'

export default function Searchbar() {

    const [pet, setPet] = useState('')

   const dispatch = useDispatch();

  function handleChange(e){
     e.preventDefault();
     setPet(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    dispatch(searchByName(pet))
    setPet('')
  }

  return (
    <div>
        <div>
            <input type="search" value={pet} onChange={e => {handleChange(e)}} />
            <button type="submit" onClick={e => {handleSubmit(e)}}>Search</button>
        </div>
    
    </div>
  )
}
// estoy probando actualizacion
