import {
    // aqui nombre de action
    GET_PETS
} from '../actions/nameAction'

const initialState = {
    // aqui mis estados
    pets: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_PETS:{
            return{
                ...state,
                pets: action.payload
            }
        }

        default:{
        return state                
        }


    }}





    export default  rootReducer