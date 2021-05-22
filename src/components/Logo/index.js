import { ReactComponent as LogoIcon } from "../../assets/icons/logo-icon.svg";
import { ReactComponent as LogoText } from "../../assets/icons/logo-text.svg";
import { LogoWrapper } from "./style";

const Logo = ({ horizontal }) => {
  return (
    <LogoWrapper horizontal={horizontal}>
      <LogoIcon />
      <LogoText />
    </LogoWrapper>
  );
};

export default Logo;
