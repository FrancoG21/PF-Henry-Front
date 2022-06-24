import {
    // aqui nombre de action
    GET_PETS,
    GET_PET_NAME
} from '../actions/nameAction'

const initialState = {
    // aqui mis estados
    pets: [],
    petsAmount: {}
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

        default: {
            return state
        }


    }
}







export default rootReducer
