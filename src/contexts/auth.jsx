import { createContext, useContext, useEffect, useState } from "react";
import * as auth from "../services/auth";
import api from "../services/api";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function loadStorageData() {
      const storagedUser = localStorage.getItem("@CodAuth:user");
      const storagedToken = localStorage.getItem("@CodAuth:token");

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  async function signIn(payload) {
    const response = await auth.signIn(payload);
    setUser(response.user);

    api.defaults.headers.Authorization = `Baerer ${response.token}`;

    localStorage.setItem("@CodAuth:user", JSON.stringify(response.user));
    localStorage.setItem("@CodAuth:token", response.token);
  }

  function signOut() {
    localStorage.clear();
    setUser(null);
  }

  function updateUser(user) {
    setUser(user);

    localStorage.setItem("@CodAuth:user", JSON.stringify(user));
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, updateUser, signIn, signOut, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
};

export default AuthContext;
