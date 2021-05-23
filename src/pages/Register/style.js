import styled from "styled-components";
import { ReactComponent as IllustrationSvg } from "../../assets/icons/login-illustration.svg";
import { ReactComponent as GoogleSvg } from "../../assets/icons/google.svg";

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

export const GoogleLogo = styled(GoogleSvg)`
  margin-right: 8px;
  vertical-align: sub;
  display: inline-block;
`;

export const Illustration = styled(IllustrationSvg)`
  width: 100%;
  margin-bottom: 62px;
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

export const Info = styled.p`
  font-size: 12px;
  margin-top: 40px;
  text-align: center;

  a {
    font-weight: 600;
  }
`;

export const LeftWrapper = styled.div``;

export const LoginContent = styled.div`
  width: 100%;
  max-width: 312px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 26px 0 15px;

  @media (min-width: 1024px) {
    padding: 0;
    max-width: initial;
    display: grid;
    grid-template-columns: 312px 392px;
    column-gap: 113px;
    align-items: center;
    justify-content: center;
  }
`;

export const RightWrapper = styled.div`
  @media (min-width: 1024px) {
    background-color: #ffffff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08);
    border-radius: 48px;
    padding: 30px;
  }
`;

export const Slogan = styled.h2`
  text-align: center;
  font-size: 18px;
  margin: 22px 0 53px;
  color: ${(props) => props.theme.colors.blue};
`;

export const Title = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 22px;
  color: ${(props) => props.theme.colors.blue};
`;
