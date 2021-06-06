import styled from "styled-components";

export const CloseModal = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 24px 0 20px auto;
  cursor: pointer;

  svg {
    width: 15px;
    height: 15px;
  }
`;

export const Content = styled.div`
  position: relative;
  overflow: auto;
  max-height: calc(100vh - 61px);
  box-sizing: border-box;
  padding-bottom: 32px;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  z-index: 50;
`;
