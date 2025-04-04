import axios from 'axios';

const PRODUCTION_SERVER_URL = 'PASTE_PRODUCTION_SERVER_URL_HERE';
const DEVELOPMENT_SERVER_URL = 'http://localhost:8080';
const baseURL =
  process.env.NODE_ENV == 'production' ? PRODUCTION_SERVER_URL : DEVELOPMENT_SERVER_URL;

console.log('here', process.env.NODE_ENV);

const api = axios.create({
  baseURL,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export default api;
