import { Tag } from "../../../styles/common";
import { Info, InfoWrap, Title } from "./style";

const Infos = ({
  name,
  email,
  biography,
  portfolio,
  area,
  programmingLanguages,
  softwares,
}) => {
  const getProgrammingLanguages = () =>
    programmingLanguages.map((language) => {
      return <Tag key={language}>{language}</Tag>;
    });
  const getSoftwares = () =>
    softwares.map((software) => {
      return <Tag key={software}>{software}</Tag>;
    });

  return (
    <>
      <InfoWrap>
        <Title>Nome</Title>
        <Info hasInfo={name}>{name}</Info>
      </InfoWrap>
      <InfoWrap>
        <Title>E-mail</Title>
        <Info hasInfo={email}>{email}</Info>
      </InfoWrap>
      <InfoWrap>
        <Title>Sobre</Title>
        <Info hasInfo={biography}>
          {biography ? biography : "Adicione um textinho sobre você =)"}
        </Info>
      </InfoWrap>
      <InfoWrap>
        <Title>Portfólio</Title>
        <Info hasInfo={portfolio}>
          {portfolio ? (
            <a href={portfolio}>{portfolio}</a>
          ) : (
            "Adicione um link para seu portfólio"
          )}
        </Info>
      </InfoWrap>
      <InfoWrap>
        <Title>Área</Title>
        <Info hasInfo={area}>
          {area ? area : "Mostre a sua área de atuação"}
        </Info>
      </InfoWrap>
      <InfoWrap>
        <Title>Tecnologias</Title>
        <Info hasInfo={programmingLanguages}>
          {programmingLanguages.length > 0
            ? getProgrammingLanguages()
            : "Mostre as linguagens que você trabalha"}
        </Info>
      </InfoWrap>
      <InfoWrap>
        <Title>Softwares</Title>
        <Info hasInfo={softwares}>
          {softwares.length > 0
            ? getSoftwares()
            : "Mostre os softwares que você utiliza"}
        </Info>
      </InfoWrap>
    </>
  );
};

export default Infos;
