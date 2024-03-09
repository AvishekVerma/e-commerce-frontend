
import axios from 'axios';
const DEPLOYED='https://e-commerce-server-production-0873.up.railway.app'
const LOCALHOST='http://localhost:9095'

export const API_BASE_URL = LOCALHOST

const jwt = localStorage.getItem("jwt")

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers:{
    "Authorization":`Bearer ${jwt}`,
    "content-Type":"application/json"
  }
});


