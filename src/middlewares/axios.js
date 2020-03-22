import axios from 'axios';

/**
 * Define axios client
 */
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export default axiosClient;