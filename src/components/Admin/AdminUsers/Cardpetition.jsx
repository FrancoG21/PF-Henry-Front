import React from 'react'
import './estilos.css'
const Cardpetition = ({info}) => {
 function detalles(){
 let result = []
  for ( let prop in info){
    result.push(info[prop])
  }return result
 }
  return (
    <>
    <div>
        <div className='container'>
         {detalles().map(e=><p>{e}</p>)}
            {console.log(info)}
        </div>
        <button>aceptar</button> <button>denegar</button>
    </div>
    </>
  )
}

export default Cardpetition