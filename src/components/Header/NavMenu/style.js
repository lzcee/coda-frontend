import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const ItemMenu = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 45px;
  text-decoration: none;
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

  @media (min-width: 768px) {
    width: 100%;
    height: 48px;
    padding: 0 16px;
    box-sizing: border-box;
  }
`;

export const Nav = styled.nav`
  display: grid;
  column-gap: 8px;
  grid-template-columns: repeat(5, 48px);
  justify-content: center;

  @media (min-width: 768px) {
    max-width: 720px;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 32px;
    margin: 0 auto;
  }
`;

export const Text = styled.span`
  display: none;

  @media (min-width: 768px) {
    display: block;
    font-weight: 700;
    color: ${(props) => props.theme.colors.primaryPink};
    margin-left: 10px;
  }
`;
