import { ModalWrapper, Content, CloseModal } from "./style";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import { Container } from "../../styles/common";

const Modal = ({ open, children }) => {
  return (
    <ModalWrapper>
      <Container>
        <CloseModal onClick={(e) => open(false)}>
          <CloseIcon />
        </CloseModal>
        <Content>{children}</Content>
      </Container>
    </ModalWrapper>
  );
};

export default Modal;
