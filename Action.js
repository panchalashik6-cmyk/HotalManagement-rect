import axios from "axios";

const API = "http://localhost:3005";


export const fetchRooms = () => async (dispatch) => {
  const res = await axios.get(`${API}/rooms`);
  dispatch({ type: "setrooms", payload: res.data });
};

export const fetchReservations = () => async (dispatch) => {
  const res = await axios.get(`${API}/reservations`);
  dispatch({ type: "set", payload: res.data });
};

export const addReservation = (data) => async (dispatch) => {
  const res = await axios.post(`${API}/reservations`, data);
  dispatch({ type: "add", payload: res.data });
};

export const deleteReservation = (id) => async (dispatch) => {
  await axios.delete(`${API}/reservations/${id}`);
  dispatch({ type: "delete", payload: id });
};
export const setSearch = (value) => {
  return {
    type: "search",
    payload: value
  };
};

export const setSort = (value) => {
  return {
    type: "sort",
    payload: value
  };
};