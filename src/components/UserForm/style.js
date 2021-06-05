import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 312px;
  margin: 0 auto;
`;

export const ForgotPassword = styled.p`
  text-align: right;
  margin-bottom: 14px;

  a {
    color: ${(props) => props.theme.colors.blue};
    text-decoration: none;
    font-size: 12px;
  }
`;
