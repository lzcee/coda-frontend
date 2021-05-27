import {
  HOME_PATH,
  EVENTS_PATH,
  CREATE_PATH,
  NETWORK_PATH,
  PROFILE_PATH,
} from "../../../config/routing/paths";

import { ReactComponent as HomeIcon } from "../../../assets/icons/home.svg";
import { ReactComponent as EventsIcon } from "../../../assets/icons/events.svg";
import { ReactComponent as CreateIcon } from "../../../assets/icons/create.svg";
import { ReactComponent as NetworkIcon } from "../../../assets/icons/network.svg";
import { ReactComponent as ProfileIcon } from "../../../assets/icons/profile.svg";

import { Nav, ItemMenu, Text } from "./style";

const NavMenu = ({ className }) => {
  return (
    <Nav className={className}>
      <ItemMenu exact to={HOME_PATH}>
        <HomeIcon />
        <Text>Home</Text>
      </ItemMenu>
      <ItemMenu exact to={EVENTS_PATH}>
        <EventsIcon />
        <Text>Eventos</Text>
      </ItemMenu>
      <ItemMenu exact to={CREATE_PATH}>
        <CreateIcon />
      </ItemMenu>
      <ItemMenu exact to={NETWORK_PATH}>
        <NetworkIcon />
        <Text>Rede</Text>
      </ItemMenu>
      <ItemMenu exact to={PROFILE_PATH}>
        <ProfileIcon />
        <Text>Perfil</Text>
      </ItemMenu>
    </Nav>
  );
};

export default NavMenu;
