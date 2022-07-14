import React,{useEffect} from "react";
import { useParams } from "react-router";
import axios from 'axios'

export default function Failure() {

    const {id} = useParams()
    useEffect(()=>{
        id && axios
        .put(`/donation/${id}`)
        .then((r)=>console.log(r.data))
        .catch((r)=> console.log(r.data))
    },[])        

    return (
    <div>       
        <h1>FAILURE</h1>
    </div>)
}