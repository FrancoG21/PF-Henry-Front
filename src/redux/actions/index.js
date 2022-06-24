import axios from 'axios';
import {
    GET_PETS,
    GET_PET_NAME,
    GET_TO_DETAILS
} from './nameAction'

//usar este url para las rutas hacia el back
const url = 'http://localhost:3001'

export function getPets(){
    return async(dispatch) =>{
        const res = await axios.get(`${url}/pets`)
        dispatch({type: GET_PETS, payload:res.data})
    }
}


export function searchByName(name){
return async(dispatch) =>{
    const res = await axios.get(`${url}?name=${name}`)
    dispatch({type: GET_PET_NAME, payload:res.data})
}
}

export function getById(id){
    return async(dispatch)=>{
        // const res = await axios.get(`${url}/pet/${id}`)
        const res = await axios.get(`http://localhost:3001/dogs/${id}`)
    //    const info = [res.data]
     console.log(res.data)
        dispatch({type:GET_TO_DETAILS, payload:res.data})
    }
}

