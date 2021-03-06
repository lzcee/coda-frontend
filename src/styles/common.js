import styled from "styled-components";

export const Button = styled.button`
  display: block;
  width: 100%;
  max-width: 312px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid ${(props) => props.theme.colors.primaryPink};
  background-color: ${(props) =>
    props.secondary ? "transparent" : props.theme.colors.primaryPink};
  color: ${(props) =>
    props.secondary ? props.theme.colors.primaryPink : "#ffffff"};
  border-radius: 24px;
  padding: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 350ms ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const Container = styled.div`
  margin-left: ${(props) => props.theme.container.mobile};
  margin-right: ${(props) => props.theme.container.mobile};

  @media (min-width: 768px) {
    margin-left: ${(props) => props.theme.container.tablet};
    margin-right: ${(props) => props.theme.container.tablet};
  }

  @media (min-width: 1200px) {
    margin-left: ${(props) => props.theme.container.desktop};
    margin-right: ${(props) => props.theme.container.desktop};
  }

  @media (min-width: 1440px) {
    margin-left: ${(props) => props.theme.container.fullDesktop};
    margin-right: ${(props) => props.theme.container.fullDesktop};
  }
`;

export const ErrorMessage = styled.p`
  position: absolute;
  font-size: 10px;
  line-height: 12px;
  width: 100%;
  font-weight: 600;
  color: #cc4b4b;
  bottom: -12px;
`;

export const FullVerticalAlignment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid #9d9d9d;
  background-color: #ffffff;
  font-size: 16px;
  padding: 12px;
  border-radius: 2px;
  box-sizing: border-box;

  &[type="checkbox"] {
    width: initial;
    vertical-align: bottom;
    display: inline-block;
    margin-right: 6px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  display: block;
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.blue};
  margin-bottom: 4px;
`;

export const Layout = styled.div`
  margin-top: 89px;
`;

export const Tag = styled.span`
  background-color: ${(props) => props.theme.colors.blue};
  color: #ffffff;
  display: inline-block;
  padding: 6px 12px;
  border-radius: 18px;
  margin: 0 6px 6px 0;
  font-size: 12px;
  line-height: 12px;
`;
