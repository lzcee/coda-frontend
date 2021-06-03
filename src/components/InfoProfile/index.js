import { useState } from "react";
import { Button, Container, Layout } from "../../styles/common";
import { AvatarWrapper, InfosWrapper } from "./style";
import Avatar from "./Avatar";
import Infos from "./Infos";
import Modal from "../Modal";

const InfoProfile = (props) => {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };
  return (
    <Layout>
      <AvatarWrapper>
        <Avatar photo={props.photo} />
      </AvatarWrapper>
      <InfosWrapper>
        <Container>
          <Infos {...props} />
          <Button onClick={openModal}>Editar Informações</Button>
          {modal && <Modal open={setModal}>modale</Modal>}
        </Container>
      </InfosWrapper>
    </Layout>
  );
};

export default InfoProfile;
