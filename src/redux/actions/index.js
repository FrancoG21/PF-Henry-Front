import axios from 'axios';
import { 
    GET_PETS,
    GET_PET_NAME,
    GET_TO_DETAILS,
    POST_PET
} from './nameAction'

//usar este url para las rutas hacia el back
const url = 'http://localhost:3001'

export function getPets(page){
    return async(dispatch) =>{
        const res = await axios.get(`${url}/pet?page=${page? page : 0}`)
        dispatch({type: GET_PETS, payload:res.data})
    }
}


export function searchByName(name){
    return async(dispatch) =>{
        const res = await axios.get(`${url}/pet?name=${name.toLowerCase()}`)
        dispatch({type: GET_PET_NAME, payload:res.data})
    }
}

export const createPet = (payload)=>{
    return async function (dispatch){
        return axios.post(`${url}/post`, payload)
        .then(res => dispatch({type: CREATE_POKE, payload:res}))
        .catch(err => console.log(err))
    }
}

export function getById(id){
    return async(dispatch)=>{
        // const res = await axios.get(`${url}/pet/${id}`)
        const res = await axios.get(`${url}/pet/${id}`)
    //    const info = [res.data]
    //  console.log(res.data)
        dispatch({type:GET_TO_DETAILS, payload:res.data})
    }
}

