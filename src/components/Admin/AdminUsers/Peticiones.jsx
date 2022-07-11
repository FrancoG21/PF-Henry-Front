import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Cardpetition from './Cardpetition'

const Peticiones = () => {

  const {id} =useParams()
  const [user, setUser]=useState(null)

  useEffect(() => {
    console.log(id)
   axios.get(`/petitionGet/${id}`).then((r)=>{setUser(r.data)});
  }, [])
  

  return (
    <>
    <div> 
      <button>volver</button>
      <button>adopcion</button>
      <button>carga</button>
    </div>

    

    <div className='container'>
      <div>
       <h1>Peticion de Adopcion</h1>
        {user&&user.PetitionGets.map((e)=><Cardpetition info={e} />)}
        </div>
      <div>
        <h1>Peticion perdidos</h1>
        {user&&user.PetitionGetLosts.map((e)=><Cardpetition info={e} />)}
      </div>
      <div>
        <h1>Load</h1>
        {user&&user.PetitionLoads.map((e)=><Cardpetition info={e} />)}
      </div>
      
    </div>
    </>
  )
}

export default Peticiones