import axios from "axios";
import {
  GET_PETS,
  GET_PET_NAME,
  GET_TO_DETAILS,
  POST_PET,
  CLEAN_DETAILS,
  LOGIN_GOOGLE, 
  LOGIN
} from "./nameAction";

export function getPets(page, filter) {
  return async (dispatch) => {
    try {
      const res = await axios.put(`/pet?page=${page}`, filter);
      dispatch({ type: GET_PETS, payload: res.data });
    } catch (e) {
      dispatch({ type: GET_PETS, payload: e.response.data });
    }
  };
}

export function searchByName(payload) {
  return async (dispatch) => {
    try {
      console.log("searchByName -->", payload);
      const res = await axios.put(`/pet`, payload);
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
      const res = await axios.post(`/pet`, payload);
      dispatch({ type: POST_PET, payload: res.data });
    } catch (e) {
      console.log(e);
    }
  };
};

export function getById(id) {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/pet/${id}`);
      dispatch({ type: GET_TO_DETAILS, payload: res.data });
    } catch (e) {
      dispatch({ type: GET_TO_DETAILS, payload: e.response.data });
    }
  };
}

export function cleanDetail() {
  return async (dispatch) => {
    dispatch({ type: CLEAN_DETAILS, payload: [] });
  };
}

export function getGoogle(info) {
  return async (dispatch) => {
   
      const res = await axios.post('/auth/login', info);
      dispatch({ type: LOGIN_GOOGLE, payload: res.data })}}

      export const loginManual = (infoDform) => {
        console.log("login -->", infoDform);
        return async function (dispatch) {
          try {
            const res = await axios.post('http://localhost:3001/user/Login', infoDform);
            
            dispatch({ type: LOGIN, payload: res.data });
          } catch (e) {
            console.log(e);
          }
        };
      };