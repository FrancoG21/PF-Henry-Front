import axios from "axios";
import {
  GET_PETS,
  GET_PET_NAME,
  GET_TO_DETAILS,
  POST_PET,
  CLEAN_DETAILS,
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
