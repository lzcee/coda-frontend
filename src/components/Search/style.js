import styled from "styled-components";

export const Title = styled.h2`
  color: #000000;
`;

export const FlexWrap = styled.div`
  padding-top: 29px;
  margin-bottom: 19px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FilterWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Filter = styled.button`
  border: 0;
  padding: 0;
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primaryPink};

  svg {
    margin-right: 6px;
  }
`;

export const SearchButton = styled.button`
  border: 0;
  padding: 10px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primaryPink};

  svg {
    width: 20px;
    height: 20px;
  }
`;
