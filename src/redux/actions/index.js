import axios from 'axios';
import {
    GET_PETS,
    GET_PET_NAME
} from './nameAction'

export function getPets(){
    return async(dispatch) =>{
        const res = await axios.get('http://localhost:3001/dogs')
        dispatch({type: GET_PETS, payload:res.data})
        
    }
}

export function searchByName(name){
return async(dispatch) =>{
    const res = await axios.get(`url?name=${name}`)
    dispatch({type: GET_PET_NAME, payload:res.data})
}
}

