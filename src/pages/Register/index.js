import { Link } from "react-router-dom";

import Logo from "../../components/Logo";
import { Button, Container, FullVerticalAlignment } from "../../styles/common";
import {
  Divisor,
  Illustration,
  Info,
  LeftWrapper,
  LoginContent,
  RightWrapper,
  Title,
  Slogan,
  GoogleLogo,
} from "./style";
import UserForm from "../../components/UserForm";

const Register = () => {
  return (
    <Container>
      <FullVerticalAlignment>
        <LoginContent>
          <LeftWrapper>
            <Logo />
            <Slogan>de mulheres para mulheres</Slogan>
            <Title>Cadastre-se</Title>
            <Illustration />
          </LeftWrapper>
          <RightWrapper>
            <UserForm type="register" />
            <Divisor>
              <p>ou</p>
            </Divisor>
            <Button secondary>
              <GoogleLogo />
              Entrar com o Google
            </Button>
            <Info>
              Já tem uma conta? <Link to="/">Entre</Link>
            </Info>
          </RightWrapper>
        </LoginContent>
      </FullVerticalAlignment>
    </Container>
  );
};

export default Register;
