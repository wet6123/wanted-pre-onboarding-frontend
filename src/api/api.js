import api from "./constant";
import axios from "axios";

const config = {
  "Content-Type": "application/json",
};

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
