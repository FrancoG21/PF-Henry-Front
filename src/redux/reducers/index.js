import {
  // aqui nombre de action
  GET_PETS,
  GET_PET_NAME,
  GET_TO_DETAILS,
  CLEAN_DETAILS,
  // GET_LOST_PETS,
  LOGIN,
  LOGOUT,
  GET_PETITION_LOAD,
  GET_PETITION_LOST,
} from "../actions/nameAction";

const initialState = {
  // aqui mis estados
  pets: [],
  petsAmount: {},
  petDetail: [],
  lostpets: [],
  usuario: null,
  petitionLoad: [],
  petitionLost: [],
  urlFront: import.meta.env.VITE_APP_FRONT || "http://localhost:3000",
  urlBack: import.meta.env.VITE_APP_API || "http://localhost:3001"
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
      console.log("respuesta del back --> abajo");
      console.log(action.payload);
      return {
        ...state,
        pets: action.payload.pets,
        petsAmount: action.payload.total,
      };
    }

    case GET_TO_DETAILS: {
      return {
        ...state,
        petDetail: action.payload,
      };
    }

    case CLEAN_DETAILS: {
      return {
        ...state,
        petDetail: action.payload,
      }
    }

    case LOGIN: {
      return {
        ...state,
        usuario: action.payload
      }
    }

    case LOGOUT: {
      return {
        ...state,
        usuario: action.payload,
      }
    }
    case GET_PETITION_LOAD: {
      console.log(action.payload, "que llega al reducer")
      return {
        ...state,
        petitionLoad: action.payload,
      }
    }
    case GET_PETITION_LOST: {
      console.log(action.payload, "Lo llega al reducer")
      return {
        ...state,
        petitionLost: action.payload,
      }
    }

    default: {
      return state;
    }
  }
};

export default rootReducer;
