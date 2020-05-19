import axios from "axios";

const api = axios.create({
  baseURL: "https://dev.privatenuts.com/exchange",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export default api;
