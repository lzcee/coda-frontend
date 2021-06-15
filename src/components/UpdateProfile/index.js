import { useState } from "react";
import { useForm } from "react-hook-form";

import { users } from "../../services/api";

import { CheckBoxWrapper, Title } from "./style";
import { Button, Input, InputWrapper, Label } from "../../styles/common";
import { useAuth } from "../../contexts/auth";

const UpdateProfile = ({ setModal }) => {
  const { user, updateUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");

  const programmingLanguages = [
    "Java",
    "Javascript",
    "HTML",
    "CSS",
    "React",
    "Angular",
    "Vue.js",
    "Node.js",
    "Flutter",
    "Android",
    "Swift",
    "Outras",
  ];

  const softwares = ["Figma", "Adobe XD", "Adobe Photoshop", "Jira", "Outros"];

  async function onSubmit(data) {
    if (typeof data.softwares === "string") {
      let softwaresList = [];
      softwaresList.push(data.softwares);
      data.softwares = softwaresList;
    }
    if (typeof data.programmingLanguages === "string") {
      let programmingLanguagesList = [];
      programmingLanguagesList.push(data.programmingLanguages);
      data.programmingLanguages = programmingLanguagesList;
    }
    let updatedUser = user;
    updatedUser = { ...updatedUser, ...data };
    setError("");
    try {
      const response = await users.update(updatedUser);
      updateUser(response);
      setModal(false);
    } catch (error) {
      setError("Ocorreu um erro. Tente novamente!");
    }
  }

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
          <Input as="select" {...register("area")} defaultValue={user.area}>
            <option value="">Selecione uma opção</option>
            <option value="Back-end">Back-end</option>
            <option value="Front-end">Front-end</option>
            <option value="Dados">Dados</option>
            <option value="UI/UX Desig">UI/UX Design</option>
            <option value="Outra">Outra</option>
          </Input>
        </InputWrapper>
        <InputWrapper>
          <Label>Tecnologias</Label>
          {programmingLanguages.map((language) => (
            <CheckBoxWrapper key={language}>
              <Input
                type="checkbox"
                id={language.replace(/\s/g, "").toLowerCase()}
                value={language}
                {...register("programmingLanguages")}
                defaultChecked={user.programmingLanguages?.includes(language)}
              />{" "}
              <label htmlFor={language.replace(/\s/g, "").toLowerCase()}>
                {language}
              </label>
            </CheckBoxWrapper>
          ))}
        </InputWrapper>
        <InputWrapper>
          <Label>Softwares</Label>
          {softwares.map((software) => (
            <CheckBoxWrapper key={software}>
              <Input
                type="checkbox"
                id={software.replace(/\s/g, "").toLowerCase()}
                value={software}
                {...register("softwares")}
                defaultChecked={user.softwares?.includes(software)}
              />{" "}
              <label htmlFor={software.replace(/\s/g, "").toLowerCase()}>
                {software}
              </label>
            </CheckBoxWrapper>
          ))}
        </InputWrapper>
        {error}
        <Button type="submit">Alterar</Button>
      </form>
    </div>
  );
};

export default UpdateProfile;
