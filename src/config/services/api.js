import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/",
});

const users = {
  create(payload) {
    return api.post("/users/", payload);
  },
  findOne(payload) {
    console.log(payload);
    return api.get(`/users/${payload.id}`, {
      headers: { Authorization: `Bearer ${payload.access_token}` },
    });
  },
  login(payload) {
    return api.post("/auth/", payload);
  },
  getProfile(payload) {
    return api.post("/auth/", payload);
  },
};

const apiSettings = {
  users,
};

export default apiSettings;
