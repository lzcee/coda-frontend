import { useEffect, useState } from "react";
import { users } from "../../../services/api";
import { Tag } from "../../../styles/common";
import { Info, InfoWrap, Title } from "../../InfoProfile/Infos/style";

const Profile = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await users.findOne(userId);
        console.log(result);
        setUser(result);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const getProgrammingLanguages = () =>
    user.programmingLanguages.map((language) => {
      return <Tag key={language}>{language}</Tag>;
    });
  const getSoftwares = () =>
    user.softwares.map((software) => {
      return <Tag key={software}>{software}</Tag>;
    });

  return (
    <div>
      {user && (
        <>
          <InfoWrap>
            <Title>Nome</Title>
            <Info hasInfo={user.name}>{user.name}</Info>
          </InfoWrap>
          <InfoWrap>
            <Title>E-mail</Title>
            <Info hasInfo={user.email}>{user.email}</Info>
          </InfoWrap>
          {user.biography && (
            <InfoWrap>
              <Title>Sobre</Title>
              <Info hasInfo={user.biography}>{user.biography}</Info>
            </InfoWrap>
          )}
          {user.portfolio && (
            <InfoWrap>
              <Title>Portfólio</Title>
              <Info hasInfo={user.portfolio}>
                <a href={user.portfolio}>{user.portfolio}</a>
              </Info>
            </InfoWrap>
          )}
          {user.phone && (
            <InfoWrap>
              <Title>Celular</Title>
              <Info hasInfo={user.phone}>{user.phone}</Info>
            </InfoWrap>
          )}
          {user.area && (
            <InfoWrap>
              <Title>Área</Title>
              <Info hasInfo={user.area}>{user.area}</Info>
            </InfoWrap>
          )}
          {user.programmingLanguages && user.programmingLanguages.length > 0 && (
            <InfoWrap>
              <Title>Tecnologias</Title>
              <Info hasInfo={user.programmingLanguages}>
                {getProgrammingLanguages()}
              </Info>
            </InfoWrap>
          )}
          {user.softwares && user.softwares.length > 0 && (
            <InfoWrap>
              <Title>Softwares</Title>
              <Info hasInfo={user.softwares}>{getSoftwares()}</Info>
            </InfoWrap>
          )}
        </>
      )}
    </div>
  );
};

export default Profile;
