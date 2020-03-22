import axiosClient from "./axios";

/**
 * Add token to headers
 * @param token
 */
const auth = token => {
  if (token) {
    axiosClient.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axiosClient.defaults.headers.common['x-auth-token'];
  }
}

export default auth;