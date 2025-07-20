import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'https://s0as6gbjnh.execute-api.us-east-1.amazonaws.com',
});