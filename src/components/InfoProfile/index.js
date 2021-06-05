import { useState } from "react";

import { Button, Container, Layout } from "../../styles/common";
import { AvatarWrapper, InfosWrapper } from "./style";
import Avatar from "./Avatar";
import Infos from "./Infos";
import Modal from "../Modal";
import UpdateProfile from "../UpdateProfile";
import { useAuth } from "../../contexts/auth";

const InfoProfile = () => {
  const { user, signOut } = useAuth();

  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };

  return (
    <Layout>
      <AvatarWrapper>
        <Avatar photo={user.photo} />
      </AvatarWrapper>
      <Container>
        <InfosWrapper>
          <Infos {...user} />
          <Button onClick={openModal}>Editar Informações</Button>
          {modal && (
            <Modal open={setModal}>
              <UpdateProfile setModal={setModal} />
            </Modal>
          )}
        </InfosWrapper>
        <Button secondary onClick={() => signOut()}>
          Sair
        </Button>
      </Container>
    </Layout>
  );
};

export default InfoProfile;
