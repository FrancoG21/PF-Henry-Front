import axios from "axios";
import {
    GET_PETITION_LOAD
    // GET_PETITION_LOST

} from "./nameAction";

export const getPetitionGet = () => {
    return async function (dispatch) {
        const res = await axios.get("/petitionGet")
        dispatch({ type: GET_PETITION_LOAD, payload: res.data.allPetitions })
    }
}

// export const getPetitionLost = () => {
//     return async function (dispatch) {
//         const res = await axios.get("/petitionGet")
//         dispatch({ type: GET_PETITION_LOAD, payload: res.data.allPetitions })
//     }
// }