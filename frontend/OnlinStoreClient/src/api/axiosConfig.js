import axios from 'axios';

export default axios.create({
  baseURL: 'https://cluster0.vs4cn5p.mongodb.net',
  headers: {
    'Content-Type': 'application/json',
    }
});