import api from "./api";

export const signIn = async (payload) => {
  const options = {
    method: "POST",
    data: payload,
    url: "/auth/",
  };
  const response = await api(options);

  return response.data;
};
