import {
  // aqui nombre de action
  GET_PETS,
  GET_PET_NAME,
  GET_TO_DETAILS,
  FILTER_PET,
} from "../actions/nameAction";

const initialState = {
  // aqui mis estados
  pets: [],
  petsAmount: {},
  petDetail: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_PETS: {
      return {
        ...state,
        pets: action.payload.pets,
        petsAmount: action.payload.total,
      };
    }

    case GET_PET_NAME: {
      return {
        ...state,
        pets: [action.payload],
      };
    }

    case GET_TO_DETAILS: {
      return {
        ...state,
        petDetail: action.payload,
      };
    }

    case FILTER_PET: {
        return {
            ...state,
            pets: action.payload.pets,
        }
    }

    default: {
      return state;
    }
  }
};

export default rootReducer;
