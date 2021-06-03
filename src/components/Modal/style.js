import styled from "styled-components";

export const Content = styled.div`
  position: absolute;
  padding: 30px;
  box-sizing: border-box;
  width: 80%;
  max-width: 600px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border-radius: 24px;
`;

export const CloseModal = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  padding: 0;
  margin-left: auto;
  margin-bottom: 20px;
  cursor: pointer;

  svg {
    width: 15px;
    height: 15px;
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #19212582;
  z-index: 10;
`;
