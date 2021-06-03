import { Img } from "./style";
import defaultAvatar from "../../../assets/icons/profile.svg";

const Avatar = ({ photo }) => {
  return <Img src={photo ? photo : defaultAvatar} alt="Foto de Perfil" />;
};
export default Avatar;
