import axios from "axios";
import AuthService from "../../../modules/auth";
import { handleLogout as Logout } from "../../../modules/auth/logout/components/Logout";

const client = axios.create({
  baseURL: import.meta.env.REACT_APP_BASE_API_URL,
});

const authInterceptor = (config) => {
  if (AuthService.checkAuth()) {
    config.headers.Authorization = `Bearer ${AuthService.token()}`;
    config.headers.common.accept = `application/json`;
  }
  return config;
};

const loggerInterceptor = (config) => {
  console.log(config);
  return config;
};

//REQUEST INTERCEPTORS
client.interceptors.request.use(authInterceptor);
client.interceptors.request.use(loggerInterceptor);

// RESPONSE INTERCEPTORS
client.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    console.log(error);
    if (error.response.status === 401) Logout();
    return Promise.reject(error);
  }
);

export default client;
