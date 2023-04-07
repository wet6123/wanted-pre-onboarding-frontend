const API_BASE_URL = "https://www.pre-onboarding-selection-task.shop/";

const AUTH_URL = "/auth";

const SIGNUP_URL = "/signup";
const SIGNIN_URL = "/signin";

const api = {
  signup: () => API_BASE_URL + AUTH_URL + SIGNUP_URL,
  singin: () => API_BASE_URL + AUTH_URL + SIGNIN_URL,
};

export default api;
