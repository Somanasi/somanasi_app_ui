import axios from "axios";
import AuthService from "../../../modules/auth";
import { handleLogout as Logout } from "../../../modules/auth/logout/components/Logout";

const client = axios.create({
  baseURL: import.meta.env.REACT_APP_BASE_API_URL,
});

/**
 * 
 * @param {*} config  -> request object
 * @returns must return request object after appending Authorization header and common headers in case the user is authenticated
 */
const authInterceptor = (config) => {
  if (AuthService.checkAuth()) {
    config.headers.Authorization = `Bearer ${AuthService.token()}`;
    config.headers.common.accept = `application/json`;
  }
  return config;
};


/**
 * 
 * @param {*} config -> requst object
 * @returns -> returns request object.
 */
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
