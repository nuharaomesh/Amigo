import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  //ensure cookies are sent with the request
  withCredentials: true,
});

export default api;
