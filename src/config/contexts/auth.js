import { createContext, useState } from "react";
import { HOME_PATH, LOGIN_PATH } from "../routing/paths";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem("@App:name") &&
      localStorage.getItem("@App:access_token") &&
      localStorage.getItem("@App:id")
      ? {
          name: localStorage.getItem("@App:name"),
          id: localStorage.getItem("@App:id"),
          access_token: localStorage.getItem("@App:access_token"),
          auth: true,
        }
      : {
          name: "",
          id: "",
          access_token: "",
          auth: false,
        }
  );

  const login = (data, history) => {
    localStorage.setItem("@App:name", data.name);
    localStorage.setItem("@App:access_token", data.access_token);
    localStorage.setItem("@App:id", data.id);

    setUser(() => ({
      name: data.name,
      id: data.id,
      access_token: data.access_token,
      auth: true,
    }));

    history.push({ pathname: HOME_PATH });
  };

  const logout = (history) => {
    localStorage.removeItem("@App:name");
    localStorage.removeItem("@App:access_token");
    localStorage.removeItem("@App:id");

    setUser(() => ({
      name: "",
      id: "",
      access_token: "",
      auth: false,
    }));

    history.push({ pathname: LOGIN_PATH });
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
