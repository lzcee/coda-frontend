import { HOME_PATH, PROFILE_PATH } from "../../../config/routing/paths";

import { ReactComponent as HomeIcon } from "../../../assets/icons/home.svg";
import { ReactComponent as ProfileIcon } from "../../../assets/icons/profile.svg";

import { Nav, ItemMenu, Text } from "./style";

const NavMenu = ({ className }) => {
  return (
    <Nav className={className}>
      <ItemMenu exact to={HOME_PATH}>
        <HomeIcon />
        <Text>Home</Text>
      </ItemMenu>
      <ItemMenu exact to={PROFILE_PATH}>
        <ProfileIcon />
        <Text>Perfil</Text>
      </ItemMenu>
    </Nav>
  );
};

export default NavMenu;
