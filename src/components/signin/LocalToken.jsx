export const setAccessToken = (token) => {
  return token ? window.localStorage.setItem("access_token", token) : null;
};

export const getAccessToken = () => {
  const token = window.localStorage.getItem("access_token");
  return token;
};
