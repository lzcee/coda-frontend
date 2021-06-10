import styled from "styled-components";
import { Tag } from "../../../styles/common";

export const CardWrapper = styled.div`
  box-sizing: border-box;
  min-height: 129px;
  padding: 24px 24px 17px;
  background-color: #ffffff;
  border-radius: 20px;
  margin-bottom: 45px;
  color: ${(props) => props.theme.colors.blue};
  display: flex;
  box-shadow: 0px 0px 20px rgb(0 0 0 / 8%);
`;

export const Img = styled.img`
  width: 43px;
  height: 43px;
  border-radius: 50%;
  margin-right: 20px;
`;

export const Name = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
`;

export const Area = styled(Tag)`
  background-color: ${(props) => props.theme.colors.primaryPink};
`;
