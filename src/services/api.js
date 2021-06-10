import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/",
});

export const users = {
  async create(user) {
    const options = {
      method: "POST",
      data: user,
      url: "/users/",
    };
    const response = await api(options);

    return response.data;
  },
  async update(user) {
    const options = {
      method: "PATCH",
      data: user,
      url: `/users/${user.id}`,
    };
    const response = await api(options);

    return response.data;
  },
  async search(params = "") {
    params = new URLSearchParams(params).toString();
    const options = {
      method: "GET",
      url: `/users/?${params}`,
    };
    const response = await api(options);

    return response.data;
  },
};

export default api;
