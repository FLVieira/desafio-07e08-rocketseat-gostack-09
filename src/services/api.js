import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.169.1.15:3333/',
});

export default api;
