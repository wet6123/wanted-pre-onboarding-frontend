const API_BASE_URL = "https://www.pre-onboarding-selection-task.shop";

const AUTH_URL = "/auth";
const TODO_URL = "/todos";

// auth
const SIGNUP_URL = "/signup";
const SIGNIN_URL = "/signin";

const api = {
  signup: () => API_BASE_URL + AUTH_URL + SIGNUP_URL,
  signin: () => API_BASE_URL + AUTH_URL + SIGNIN_URL,
  createTodo: () => API_BASE_URL + TODO_URL,
  getTodos: () => API_BASE_URL + TODO_URL,
  updateTodo: (id) => API_BASE_URL + TODO_URL + `/${id}`,
  deleteTodo: (id) => API_BASE_URL + TODO_URL + `/${id}`,
};

export default api;
