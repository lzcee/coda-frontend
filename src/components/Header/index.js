import Logo from "../Logo";
import NavMenu from "./NavMenu";
import { Container } from "../../styles/common";
import { HeaderWrap } from "./style";

const Header = () => {
  return (
    <HeaderWrap>
      <Container>
        <Logo className="logo" horizontal={true} />
        <NavMenu className="menu" />
      </Container>
    </HeaderWrap>
  );
};

export default Header;
