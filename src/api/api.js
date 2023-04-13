import api from "./constant";
import axios from "axios";

const config = {
  "Content-Type": "application/json",
};

const authConfig = (access_token) => ({
  headers: {
    Authorization: access_token === null ? "" : `Bearer ${access_token}`,
    "Content-Type": "application/json",
  },
});

export const signin = async (payload) => {
  try {
    const res = await axios.post(api.signin(), payload, config);
    return res.data;
  } catch (err) {
    return null;
  }
};

export const signup = async (payload) => {
  try {
    const res = await axios.post(api.signup(), payload, config);
    return res;
  } catch (err) {
    return null;
  }
};

// export const createTodo = async (payload) => {
//   try {
//     const token = window.localStorage.getItem("access_token");
//     const res = await axios.post(api.createTodo(), payload, authConfig(token));
//     return res.data;
//   } catch (err) {
//     return null;
//   }
// };

// export const getTodos = async () => {
//   try {
//     const token = window.localStorage.getItem("access_token");
//     const res = await axios.get(api.getTodos(), authConfig(token));
//     return res.data;
//   } catch (err) {
//     return null;
//   }
// };

// export const updateTodo = async (id, payload) => {
//   try {
//     const token = window.localStorage.getItem("access_token");
//     const res = await axios.put(api.updateTodo(id), payload, authConfig(token));
//     return res.data;
//   } catch (err) {
//     return null;
//   }
// };

// export const deleteTodo = async (id, payload) => {
//   try {
//     const token = window.localStorage.getItem("access_token");
//     const res = await axios.delete(api.updateTodo(id), authConfig(token));
//     return res;
//   } catch (err) {
//     return null;
//   }
// };
