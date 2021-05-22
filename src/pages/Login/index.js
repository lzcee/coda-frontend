import { Link } from "react-router-dom";
import { REGISTER_PATH } from "../../config/routing/paths";

import Logo from "../../components/Logo";
import { Button, Container } from "../../styles/common";
import { Divisor, Illustration, Info, LoginContent, Slogan } from "./style";

const Login = () => {
  return (
    <Container>
      <LoginContent>
        <Logo />
        <Slogan>de mulheres para mulheres</Slogan>
        <Illustration />
        <Button>Entrar</Button>
        <Divisor>
          <p>ou</p>
        </Divisor>
        <Button secondary>Entrar com o Google</Button>
        <Info>
          Ainda não tem uma conta?{" "}
          <Link to={{ pathname: REGISTER_PATH }}>Cadastre-se</Link>
        </Info>
      </LoginContent>
    </Container>
  );
};

export default Login;
