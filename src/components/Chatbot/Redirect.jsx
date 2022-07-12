import React from 'react'
import { useNavigate } from "react-router-dom"
import {useEffect} from 'react'


export default function Redireccion({URL}) {

const navigate = useNavigate()
function Click(){
    navigate(URL)
}
 
useEffect(() =>{
   Click()
}, [])

  return  (
    <>
   
    </>
  )

}
