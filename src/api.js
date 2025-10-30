import axios from "axios";

const api = axios.create({
  baseURL: "https://bridal-backend-zfij.onrender.com", // your backend base URL
  withCredentials: true, // if you use cookies or sessions
});

export default api;
