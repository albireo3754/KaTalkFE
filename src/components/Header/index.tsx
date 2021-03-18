import React from 'react';
import {
  NameBar,
  NavContainer,
  LeftArrowIcon,
  SearchIcon,
  ToggleBarContainer,
  ToggleBar,
  HeaderContainer,
} from './style';

const LeftArrow: React.SFC = () => {
  return <LeftArrowIcon />;
};

const Search: React.SFC = () => {
  return <SearchIcon></SearchIcon>;
};

const Toggle: React.SFC = () => {
  return (
    <ToggleBarContainer>
      {Array(3)
        .fill(1)
        .map((_) => (
          <ToggleBar />
        ))}
    </ToggleBarContainer>
  );
};

const Name: React.SFC<{ name: string }> = ({ name }) => {
  return <NameBar>{name}</NameBar>;
};

export const Header: React.SFC = () => {
  return (
    <HeaderContainer>
      <LeftArrow></LeftArrow>
      <Name name="롤 프로빌더"></Name>
      <NavContainer>
        <Search></Search>
        <Toggle />
      </NavContainer>
    </HeaderContainer>
  );
};
