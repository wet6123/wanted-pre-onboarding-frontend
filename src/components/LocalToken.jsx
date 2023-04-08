export const setAccessToken = (token) => {
  window.localStorage.setItem("access_token", token);
};

export const getAccessToken = () => {
  const token = window.localStorage.getItem("access_token");
  return token;
};
