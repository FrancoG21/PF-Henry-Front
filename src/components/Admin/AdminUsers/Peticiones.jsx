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
      <h1>get</h1>
      {user&&user.PetitionGets.map((e)=><Cardpetition info={e} />)}
      <h1>getLost</h1>
      {user&&user.PetitionGetLosts.map((e)=><Cardpetition info={e} />)}
      <h1>Load</h1>
      {user&&user.PetitionLoads.map((e)=><Cardpetition info={e} />)}
    </div>
    </>
  )
}

export default Peticiones