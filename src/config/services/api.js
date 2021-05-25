import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/",
});

const users = {
  register(payload) {
    return api.post("/users/", payload);
  },
  login(payload) {
    return api.post("/auth/", payload);
  },
};

const apiSettings = {
  users,
};

export default apiSettings;
