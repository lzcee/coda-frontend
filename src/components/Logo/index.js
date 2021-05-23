import { ReactComponent as LogoIcon } from "../../assets/icons/logo-icon.svg";
import { ReactComponent as LogoText } from "../../assets/icons/logo-text.svg";
import { LogoWrapper } from "./style";

const Logo = ({ className, horizontal }) => {
  return (
    <LogoWrapper className={className} horizontal={horizontal}>
      <LogoIcon />
      <LogoText />
    </LogoWrapper>
  );
};

export default Logo;
