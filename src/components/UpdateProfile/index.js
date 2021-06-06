import { useState } from "react";
import { useForm } from "react-hook-form";

import { users } from "../../services/api";

import { Title } from "./style";
import { Button, Input, InputWrapper, Label } from "../../styles/common";
import { useAuth } from "../../contexts/auth";

const Updateuser = ({ setModal }) => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    let updatedUser = user;
    updatedUser = { ...updatedUser, ...data };

    try {
      await users.update(updatedUser);
    } catch (error) {
      setError("Ocorreu um erro. Tente novamente!");
    }
  }

  const [error, setError] = useState("");

  return (
    <div>
      <Title>Editar Perfil</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <Label>Nome</Label>
          <Input
            type="text"
            defaultValue={user.name}
            {...register("name", { required: true, maxLength: 80 })}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>E-mail</Label>
          <Input
            type="email"
            defaultValue={user.email}
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Sobre</Label>
          <Input
            as="textarea"
            defaultValue={user.biography}
            {...register("biography", {})}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Celular</Label>
          <Input
            type="tel"
            defaultValue={user.phone}
            {...register("phone", { maxLength: 12 })}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Portfólio</Label>
          <Input
            type="url"
            defaultValue={user.portfolio}
            {...register("portfolio", {})}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Área</Label>
          <Input as="select" {...register} defaultValue={user.area}>
            <option value="">Selecione uma opção</option>
            <option value="backend">Back-end</option>
            <option value="frontend">Front-end</option>
            <option value="data">Dados</option>
            <option value="ui_ux">UI/UX Design</option>
            <option value="other">Outra</option>
          </Input>
        </InputWrapper>
        <InputWrapper>
          <Label>Tecnologias</Label>
          <Input
            type="checkbox"
            id="java"
            value="java"
            {...register("programmingLanguages")}
          />
          <label htmlFor="java">Java</label>
          <Input
            type="checkbox"
            id="javascript"
            value="javascript"
            {...register("programmingLanguages")}
          />
          <label htmlFor="javascript">Javascript</label>
        </InputWrapper>
        <InputWrapper>
          <Label>Softwares</Label>
          <Input type="checkbox" {...register("softwares", {})} />
        </InputWrapper>
        {error}
        <Button type="submit">Alterar</Button>
      </form>
    </div>
  );
};

export default Updateuser;
