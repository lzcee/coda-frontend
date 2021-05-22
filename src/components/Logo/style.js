import styled from "styled-components";

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: ${({ horizontal }) => (horizontal ? "row" : "column")};
  align-items: center;
  justify-content: center;
  gap: 4px;
`;
