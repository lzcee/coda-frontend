import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const ItemMenu = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  padding: 0 16px;
  box-sizing: border-box;
  text-decoration: none;
  border-bottom: 3px solid ${(props) => props.theme.colors.white};
  transition: opacity 350ms ease;

  svg {
    width: 32px;
    height: 32px;
  }

  &.active {
    border-bottom: 3px solid ${(props) => props.theme.colors.primaryPink};
  }

  &:hover {
    opacity: 0.9;
  }
`;

export const Nav = styled.nav`
  display: grid;
  justify-content: center;
  max-width: 720px;
  grid-template-columns: repeat(2, 108px);
  column-gap: 32px;
  margin: 0 auto;
`;

export const Text = styled.span`
  font-weight: 700;
  color: ${(props) => props.theme.colors.primaryPink};
  margin-left: 10px;
`;
