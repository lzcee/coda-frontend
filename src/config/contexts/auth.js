import { createContext, useState } from "react";
import { HOME_PATH, LOGIN_PATH } from "../routing/paths";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem("@App:name") &&
      localStorage.getItem("@App:token") &&
      localStorage.getItem("@App:id")
      ? {
          name: localStorage.getItem("@App:name"),
          id: localStorage.getItem("@App:id"),
          token: localStorage.getItem("@App:token"),
          auth: true,
        }
      : {
          name: "",
          id: "",
          token: "",
          auth: false,
        }
  );

  const login = (name, id, token, history) => {
    localStorage.setItem("@App:name", name);
    localStorage.setItem("@App:token", token);
    localStorage.setItem("@App:id", id);

    setUser(() => ({
      name,
      id,
      token,
      auth: true,
    }));

    history.push({ pathname: HOME_PATH });
  };

  const logout = (history) => {
    localStorage.removeItem("@App:name");
    localStorage.removeItem("@App:token");
    localStorage.removeItem("@App:id");

    setUser(() => ({
      name: "",
      id: "",
      token: "",
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
