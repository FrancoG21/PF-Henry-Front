import axios from 'axios';
import {
    GET_PETS,
    GET_PET_NAME
} from './nameAction'

//usar este url para las rutas hacia el back
const url = 'http://localhost:3001'

export function getPets(){
    return async(dispatch) =>{
        const res = await axios.get(`${url}/dogs`)
        dispatch({type: GET_PETS, payload:res.data})
    }
}


export function searchByName(name){
return async(dispatch) =>{
    const res = await axios.get(`${url}?name=${name}`)
    dispatch({type: GET_PET_NAME, payload:res.data})
}
}

