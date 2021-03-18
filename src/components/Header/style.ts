import styled, { css } from 'styled-components';
import { FlexContainer } from '../Katalk';
// import { ArrowLeftShort, Search } from '@styled-icons/bootstrap';
import { ArrowBack, Search } from '@styled-icons/boxicons-regular';
export const NavContainer = styled.div`
  ${FlexContainer}
  float: right;
`;
const iconSize = css`
  width: 20px;
  height: 20px;
`;

const margin = css`
  margin-left: 20px;
  margin-right: 20px;
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  height: 40px;
`;
export const LeftArrowIcon = styled(ArrowBack)`
  ${iconSize};
  ${margin};
`;
export const SearchIcon = styled(Search)`
  ${iconSize}
  ${margin};
`;
export const ToggleBarContainer = styled.div`
  ${margin};
`;
export const ToggleBar = styled.div`
  background-color: black;
  width: 20px;
  height: 2px;
  margin: 6px 0;
`;

export const NameBar = styled.div`
  flex-grow: 5;
  ${margin};
`;
