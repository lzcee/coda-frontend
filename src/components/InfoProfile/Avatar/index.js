import { useState } from "react";

import { Img, ImageWrapper, Edit, InputFile, Title } from "./style";
import { ReactComponent as EditIcon } from "../../../assets/icons/edit.svg";

import defaultAvatar from "../../../assets/icons/profile.svg";
import Modal from "../../Modal";
import { Button } from "../../../styles/common";

const Avatar = ({ photo }) => {
  const [modal, setModal] = useState(false);
  const [file, setFile] = useState(null);

  const openModal = () => {
    setModal(true);
  };

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();

    formData.append("myFile", file, file.name);
    console.log(file);

    setModal(false);

    // axios.post("api/uploadfile", formData);
  };

  return (
    <>
      <ImageWrapper>
        <Img src={photo ? photo : defaultAvatar} alt="Foto de Perfil" />
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
