import {
    // aqui nombre de action
    GET_PETS,
    GET_PET_NAME,
    GET_TO_DETAILS
} from '../actions/nameAction'

const initialState = {
    // aqui mis estados
    pets: [],
    petDetail:[],
   petsAmount: {},
    errors: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_PETS: {
            return {
                ...state,
                pets: action.payload.pets,
                petsAmount: action.payload.total
            }
        }

        case GET_PET_NAME: {
            return {
                ...state,
                pets: [action.payload]
            }
        }
        case GET_PET_NAME:{
            return{
             ...state,
             byName: action.payload
            }
        }
        case GET_TO_DETAILS:{
            
            return{
                ...state,
                petDetail: action.payload
                
            }
            

        }


        default: {
            return state
        }


    }
}







export default rootReducer
