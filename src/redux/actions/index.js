import axios from 'axios';
import { 
    GET_PETS,
    GET_PET_NAME,
<<<<<<< HEAD
    GET_TO_DETAILS
=======
    POST_PET
>>>>>>> 5cbdcab27dcd3d44f188fc7d03d48b41935b8a5d
} from './nameAction'

//usar este url para las rutas hacia el back
const url = 'http://localhost:3001'

export function getPets(){
    return async(dispatch) =>{
<<<<<<< HEAD
        const res = await axios.get(`${url}/pets`)
=======
        const res = await axios.get(`${url}/pet`)
>>>>>>> 5cbdcab27dcd3d44f188fc7d03d48b41935b8a5d
        dispatch({type: GET_PETS, payload:res.data})
    }
}


export function searchByName(name){
    return async(dispatch) =>{
        const res = await axios.get(`${url}?name=${name}`)
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
        const res = await axios.get(`http://localhost:3001/dogs/${id}`)
    //    const info = [res.data]
     console.log(res.data)
        dispatch({type:GET_TO_DETAILS, payload:res.data})
    }
}

