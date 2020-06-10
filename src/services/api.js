import axios from 'axios';

const api = axios.create({
  headers: { 'Content-Type': 'application/json' },
  baseURL: 'http://192.168.1.8:3001/',
});

export default api;
