// src/services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://leoproti.com.br:8004/",
});

// Comuniçação com a API HTTPS, porém nâo funciona
//const api = axios.create({
//  baseURL: "https://apipw.leoproti.com.br/",
//});

export default api;
