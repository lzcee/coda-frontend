import { ReactComponent as HomeIcon } from "../../../assets/icons/home.svg";
import { ReactComponent as ProfileIcon } from "../../../assets/icons/profile.svg";

import { Nav, ItemMenu, Text } from "./style";

const NavMenu = ({ className }) => {
  return (
    <Nav className={className}>
      <ItemMenu exact to="/">
        <HomeIcon />
        <Text>Home</Text>
      </ItemMenu>
      <ItemMenu exact to="/perfil">
        <ProfileIcon />
        <Text>Perfil</Text>
      </ItemMenu>
    </Nav>
  );
};

export default NavMenu;
