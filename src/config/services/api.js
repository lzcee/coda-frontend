import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/",
});

const users = {
  create(payload) {
    return api.post("/users/", payload);
  },
  findOne(payload) {
    return api.get(`/users/${payload.id}`, {
      headers: { Authorization: `Bearer ${payload.access_token}` },
    });
  },
  update(payload) {
    return api.patch(`/users/${payload.infos.id}`, payload.user, {
      headers: { Authorization: `Bearer ${payload.infos.access_token}` },
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
