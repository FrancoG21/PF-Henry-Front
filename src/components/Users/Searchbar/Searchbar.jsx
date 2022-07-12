import React from 'react'
import {useDispatch} from 'react-redux'
import {useState} from 'react'
import {searchByName} from '../../../redux/actions/index';
import { BiSearch } from 'react-icons/bi';
import { ContainerSearch, ButttonSearch, Search } from './StyledSearchBar';
import Swal from 'sweetalert2'

export default function Searchbar({stateValue}) {

  const [name, setPet] = useState('')

  const dispatch = useDispatch();

  function handleChange(e){
    e.preventDefault();
    setPet(e.target.value);
  }


  function handleSubmit(e){
    e.preventDefault();

    if(name.toLowerCase().replace(/ /g, "").length > 0){
      console.log('searchbar -->',name)
      console.log('stateValue SearchBar',stateValue)
      dispatch(searchByName({name: name.toLocaleLowerCase(), state: stateValue}))            
      setPet('')
      
    }
    if(name.toLowerCase().replace(/ /g, "").length === 0 ){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Por Favor Escribe algo!',
        showConfirmButton: true,
        timer: 1500
      })
      setPet('')        
    }
  }

  return (
        <ContainerSearch>
            <Search type="search" value={name} onChange={e => {handleChange(e)}} placeholder='Buscar Mascotas...'/>
            <ButttonSearch type="submit" onClick={e => {handleSubmit(e)}}><BiSearch/></ButttonSearch>
        </ContainerSearch>
  )
}

