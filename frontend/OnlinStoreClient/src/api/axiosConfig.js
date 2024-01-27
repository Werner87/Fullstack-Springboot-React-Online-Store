import axios from 'axios';

export default axios.create({
  baseURL: 'https://27b6-85-202-45-183.ngrok-free.app',
  headers: {"ngrok-skip-browser-warning": "true"}
});