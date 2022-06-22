import axios from 'axios';
import {
    GET_PETS
} from './nameAction'

export function getPets(){
    return async(dispatch =>{
        const res = await axios.get('')
        dispatch({type: GET_PETS, payload:res.data})
        
    })
}

