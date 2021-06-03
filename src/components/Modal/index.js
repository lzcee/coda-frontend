import { ModalWrapper, Content, CloseModal } from "./style";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";

const Modal = ({ open, children }) => {
  return (
    <ModalWrapper>
      <Content>
        <CloseModal onClick={(e) => open(false)}>
          <CloseIcon />
        </CloseModal>
        {children}
      </Content>
    </ModalWrapper>
  );
};

export default Modal;
