import { useState } from "react";

import { Img, ImageWrapper, Edit, InputFile, Title } from "./style";
import { ReactComponent as EditIcon } from "../../../assets/icons/edit.svg";

import defaultAvatar from "../../../assets/icons/profile.svg";
import Modal from "../../Modal";
import { Button } from "../../../styles/common";
import { users } from "../../../services/api";
import { useAuth } from "../../../contexts/auth";

const Avatar = ({ photo, userId }) => {
  const { updateUser } = useAuth();
  const [modal, setModal] = useState(false);
  const [file, setFile] = useState(null);

  const openModal = () => {
    setModal(true);
  };

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();

    formData.append("file", file, file.name);

    setModal(false);

    const user = await users.upload(formData, userId);
    updateUser(user);
  };

  return (
    <>
      <ImageWrapper>
        <Img
          src={
            photo ? `http://localhost:3000/users/img/${photo}` : defaultAvatar
          }
          alt="Foto de Perfil"
        />
        <Edit onClick={openModal}>
          <EditIcon />
        </Edit>
      </ImageWrapper>
      {modal && (
        <Modal open={setModal}>
          <Title>Alterar Imagem de Perfil</Title>
          <InputFile
            type="file"
            accept="image/png, image/jpeg"
            onChange={onFileChange}
          />
          <Button secondary onClick={handleUpload}>
            Salvar
          </Button>
        </Modal>
      )}
    </>
  );
};
export default Avatar;
