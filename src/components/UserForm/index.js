import { useState } from "react";
import { useForm } from "react-hook-form";

import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

import {
  Button,
  Input,
  Label,
  InputWrapper,
  ErrorMessage,
} from "../../styles/common";
import { Form, ForgotPassword } from "./style";

const UserForm = ({ type }) => {
  const { signIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState(null);

  async function onSubmit(data) {
    switch (type) {
      case "register":
        break;
      case "login":
        try {
          await signIn(data);
        } catch (error) {
          setError("Ocorreu um erro. Tente novamente!");
        }
        break;
      default:
        break;
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {type === "register" && (
        <InputWrapper>
          <Label>Nome</Label>
          <Input type="text" {...register("name", { required: true })} />
          {errors.name && <ErrorMessage>*Campo obrigatório</ErrorMessage>}
        </InputWrapper>
      )}
      <InputWrapper>
        <Label>E-mail</Label>
        <Input
          type="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <ErrorMessage>*Campo obrigatório</ErrorMessage>}
      </InputWrapper>
      <InputWrapper>
        <Label>Senha</Label>
        <Input type="password" {...register("password", { required: true })} />
        {errors.password && <ErrorMessage>*Campo obrigatório</ErrorMessage>}
      </InputWrapper>
      {type === "login" && (
        <ForgotPassword>
          <Link to="/">Esqueceu a senha?</Link>
        </ForgotPassword>
      )}
      {type === "register" && (
        <InputWrapper>
          <Label>Confirmar Senha</Label>
          <Input
            type="password"
            {...register("confirmPassword", { required: true })}
          />
          {errors.confirmPassword && (
            <ErrorMessage>*Campo obrigatório</ErrorMessage>
          )}
        </InputWrapper>
      )}
      <Button type="submit">{type === "login" ? "Entrar" : "Cadastrar"}</Button>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Form>
  );
};

export default UserForm;
