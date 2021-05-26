import { useState, useContext } from "react";

import { Link, useHistory } from "react-router-dom";
import { REGISTER_PATH } from "../../config/routing/paths";

import api from "../../config/services/api";
import { UserContext } from "../../config/contexts/auth";

import { Button, Input, Label } from "../../styles/common";
import { ErrorMessage, Form, ForgotPassword } from "./style";

const UserForm = ({ type }) => {
  const { login } = useContext(UserContext);
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    var regex = /^[\w-s.]+@([\w-]+.)+[\w-]{2,4}$/;
    return regex.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    return password.trim() !== "" ? true : false;
  };

  const validateName = (name) => {
    return name.trim() !== "" ? true : false;
  };

  const validateFields = () => {
    if (
      type === "register" &&
      validateName(user.name) &&
      validateEmail(user.email) &&
      validatePassword(user.password)
    ) {
      setError("");
      return true;
    } else if (
      type === "login" &&
      validateEmail(user.email) &&
      validatePassword(user.password)
    ) {
      setError("");
      return true;
    } else {
      setError("Ops! Verifique os campos antes de enviar!");
      return false;
    }
  };

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = async (event) => {
    event.preventDefault();
    if (validateFields()) {
      if (type === "login") {
        const payload = {
          email: user.email,
          password: user.password,
        };
        setError("");
        try {
          const response = await api.users.login(payload);
          const data = response.data;
          login(data, history);
        } catch (e) {
          setError("Ops! E-mail/senha incorretos, tente novamente!");
        }
      } else if (type === "register") {
        const payload = {
          name: user.name,
          email: user.email,
          password: user.password,
        };
        setError("");
        try {
          const response = await api.users.register(payload);
          const data = response.data;
          login(data, history);
        } catch (e) {
          setError(
            "Ops! Não foi possível concluir o cadastro, tente novamente!"
          );
        }
      }
    }
  };
  return (
    <Form>
      {type === "register" && (
        <>
          <Label>Nome</Label>
          <Input
            name="name"
            type="text"
            onChange={handleChange}
            value={user.name}
          />
        </>
      )}
      <Label>E-mail</Label>
      <Input
        name="email"
        type="email"
        onChange={handleChange}
        value={user.email}
      />
      <Label>Senha</Label>
      <Input
        name="password"
        type="password"
        onChange={handleChange}
        value={user.password}
      />
      {type === "login" && (
        <ForgotPassword>
          <Link to={{ pathname: REGISTER_PATH }}>Esqueceu a senha?</Link>
        </ForgotPassword>
      )}
      {type === "register" && (
        <>
          <Label>Confirmar Senha</Label>
          <Input
            name="confirmPassword"
            type="password"
            onChange={handleChange}
            value={user.confirmPassword}
          />
        </>
      )}
      <Button type="submit" onClick={handleClick}>
        {type === "login" ? "Entrar" : "Cadastrar"}
      </Button>
      <ErrorMessage>{error}</ErrorMessage>
    </Form>
  );
};

export default UserForm;
