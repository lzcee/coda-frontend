import styled from "styled-components";
import { ReactComponent as IllustrationSvg } from "../../assets/icons/login-illustration.svg";

export const Divisor = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;

  p {
    margin: 0 12px;
  }

  &::after,
  &::before {
    content: "";
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.colors.blue};
  }
`;

export const Illustration = styled(IllustrationSvg)`
  width: 100%;
  margin-bottom: 62px;
`;

export const Info = styled.p`
  margin-top: 40px;
`;

export const LoginContent = styled.div`
  max-width: 312px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 26px 0 15px;
  text-align: center;
`;

export const Slogan = styled.h2`
  margin: 22px 0 53px;
  color: ${(props) => props.theme.colors.blue};
`;
