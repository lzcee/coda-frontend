import styled from "styled-components";

export const ImageWrapper = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  margin: 0 auto 16px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const InputFile = styled.input`
  margin: 20px 0;
  width: 100%;
`;

export const Edit = styled.button`
  position: absolute;
  bottom: -7px;
  right: -14px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 0;
  background-color: ${(props) => props.theme.colors.blue};
  cursor: pointer;
  transition: opacity 350ms ease;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primaryPink};
`;
