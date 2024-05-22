import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://your-api-base-url.com',
  timeout: 10000,
});