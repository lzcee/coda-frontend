import styled from "styled-components";

export const Info = styled.p`
  font-size: 14px;
  opacity: ${(props) => (props.hasInfo ? 1 : 0.6)};
`;

export const InfoWrap = styled.div`
  margin-bottom: 22px;
`;

export const Title = styled.p`
  font-weight: 700;
  margin-bottom: 6px;
  font-size: 14px;
`;
