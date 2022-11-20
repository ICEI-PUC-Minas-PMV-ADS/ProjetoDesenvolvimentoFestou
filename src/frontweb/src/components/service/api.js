import axios from 'axios';

export const API = axios.create({
    baseURL: "http://localhost:5000",
});

export const userLogin = async (email, password) => {
  return API.post("/login", {email, password});
};

