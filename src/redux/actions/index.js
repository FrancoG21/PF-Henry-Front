import axios from "axios";
import {
  GET_PETS,
  GET_PET_NAME,
  GET_TO_DETAILS,
  POST_PET,
  FILTER_PET,
} from "./nameAction";

//usar este url para las rutas hacia el back
const url = "http://localhost:3001";

export function getPets(page) {
  return async (dispatch) => {
    const res = await axios.post(`${url}/pet?page=${page ? page : 0}`);
    dispatch({ type: GET_PETS, payload: res.data });
  };
}

export function searchByName(payload) {
  return async (dispatch) => {
    try {
      console.log("searchByName -->", payload);
      const res = await axios.post(`${url}/pet`, payload); 
      dispatch({ type: GET_PET_NAME, payload: res.data });
    } catch (e) {
      dispatch({ type: GET_PET_NAME, payload: e.response.data });
    }
  };
}

export const createPet = (payload) => {
  console.log("createPet -->", payload);
  return async function (dispatch) {
    try {
      const res = await axios.post(`${url}/pet`, payload);
      dispatch({ type: POST_PET, payload: res.data });
    } catch (e) {
      console.log(e);
    }
  };
};

export function getById(id) {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${url}/pet/${id}`);
      dispatch({ type: GET_TO_DETAILS, payload: res.data });
    } catch (e) {
      dispatch({ type: GET_TO_DETAILS, payload: e.response.data });
    }
  };
}

export function filterPet(payload) {
  console.log("filterPet -->", payload);
  return async function (dispatch) {
    try {
      const res = await axios.post(`${url}/pet`, payload);
      dispatch({ type: FILTER_PET, payload: res.data });
    } catch (e) {
      dispatch({ type: FILTER_PET, payload: e.response.data });
    }
  };
}
