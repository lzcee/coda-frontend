import { Link } from "react-router-dom";

import Logo from "../../components/Logo";
import { Button, Container, FullVerticalAlignment } from "../../styles/common";
import {
  Divisor,
  GoogleLogo,
  Illustration,
  Info,
  LeftWrapper,
  LoginContent,
  RightWrapper,
  Slogan,
} from "./style";
import UserForm from "../../components/UserForm";

const Login = () => {
  return (
    <Container>
      <FullVerticalAlignment>
        <LoginContent>
          <LeftWrapper>
            <Logo />
            <Slogan>de mulheres para mulheres</Slogan>
            <Illustration />
          </LeftWrapper>
          <RightWrapper>
            <UserForm type="login" />
            <Divisor>
              <p>ou</p>
            </Divisor>
            <Button secondary>
              <GoogleLogo />
              Entrar com o Google
            </Button>
            <Info>
              Ainda não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
            </Info>
          </RightWrapper>
        </LoginContent>
      </FullVerticalAlignment>
    </Container>
  );
};

export default Login;
