import { Area, CardWrapper, Description, Img, Name } from "./style";
import defaultAvatar from "../../../assets/icons/profile.svg";

const Card = ({
  id,
  name,
  biography,
  area,
  photo,
  setModal,
  setSelectedUser,
}) => {
  function handleClick() {
    setModal(true);
    setSelectedUser(id);
  }
  return (
    <CardWrapper onClick={handleClick}>
      <Img
        src={photo ? `http://localhost:3000/users/img/${photo}` : defaultAvatar}
      />
      <div>
        <Name>{name}</Name>
        {biography && <Description>{biography}</Description>}
        {area && <Area>{area}</Area>}
      </div>
    </CardWrapper>
  );
};

export default Card;
