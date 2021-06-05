import { useContext, useState } from "react";
import { Title } from "./style";
import { Button, Input, Label } from "../../styles/common";

const UpdateProfile = ({ setModal }) => {
  // const { user, setUser } = useContext(UserContext);
  // const [profile, setProfile] = useState({ ...user });

  // const [error, setError] = useState("");
  // const handleChange = (event) => {
  //   setProfile({
  //     ...profile,
  //     [event.target.name]: event.target.value,
  //   });
  // };
  // const pushSelect = (event) => {
  //   const select = profile[event.target.name];
  //   setProfile({
  //     ...profile,
  //     [event.target.name]: [select, event.target.value],
  //   });
  // };
  // const validateEmail = (email) => {
  //   var regex = /^[\w-s.]+@([\w-]+.)+[\w-]{2,4}$/;
  //   return regex.test(String(email).toLowerCase());
  // };

  // const validateName = (name) => {
  //   return name.trim() !== "" ? true : false;
  // };

  // const validateFields = () => {
  //   if (validateName(user.name) && validateEmail(user.email)) {
  //     setError("");
  //     return true;
  //   } else {
  //     setError("Ops! Verifique os campos antes de enviar!");
  //     return false;
  //   }
  // };

  // const handleClick = async (event) => {
  //   event.preventDefault();
  //   if (validateFields()) {
  //     setError("");
  //     try {
  //       const { access_token, id, auth, ...updateInfos } = user;
  //       const payload = {
  //         infos: user,
  //         user: updateInfos,
  //       };
  //       const response = await api.users.update(payload);
  //       setUser({ ...user, ...response.data });
  //       setModal(false);
  //     } catch (e) {
  //       setError(
  //         "Ops! Não foi possível concluir a atualização, tente novamente!"
  //       );
  //     }
  //   }
  // };

  return (
    <div>
      <Title>Editar Perfil</Title>
      <Label>Nome</Label>
      {/* <Input
        name="name"
        type="text"
        onChange={handleChange}
        value={profile.name}
      />
      <Label>E-mail</Label>
      <Input
        name="email"
        type="email"
        onChange={handleChange}
        value={profile.email}
      />
      <Label>Sobre</Label>
      <Input
        name="biography"
        type="text"
        onChange={handleChange}
        value={profile.biography ? profile.biography : ""}
      />
      <Label>Portfólio</Label>
      <Input
        name="portfolio"
        type="link"
        onChange={handleChange}
        value={profile.portfolio ? profile.portfolio : ""}
      />
      <Label>Área</Label>
      <Input
        as="select"
        name="area"
        onChange={handleChange}
        value={profile.area ? profile.area : ""}
      >
        <option value="">Selecione uma opção</option>
        <option value="backend">Back-end</option>
        <option value="frontend">Front-end</option>
        <option value="data">Dados</option>
        <option value="ui_ux">UI/UX Design</option>
        <option value="other">Outra</option>
      </Input>
      <Label>Tecnologias</Label>
      <Input
        type="text"
        value={profile.programmingLanguages ? profile.programmingLanguages : ""}
        readOnly
      />
      <Input as="select" name="programmingLanguages" onChange={pushSelect}>
        <option value="">Selecione uma opção</option>
        <option value="java">Java</option>
        <option value="javascript">Javascript</option>
        <option value="php">PHP</option>
        <option value="react">React</option>
        <option value="angular">Angular</option>
        <option value="flutter">Flutter</option>
        <option value="android">Android</option>
        <option value="swift">Swift</option>
        <option value="hmtl">HTML</option>
        <option value="other">Outra</option>
      </Input>
      <Label>Softwares</Label>
      <Input
        type="text"
        value={profile.softwares ? profile.softwares : ""}
        onChange={handleChange}
      />
      {error}
      <Button type="submit" onClick={handleClick}>
        Alterar
      </Button> */}
    </div>
  );
};

export default UpdateProfile;
