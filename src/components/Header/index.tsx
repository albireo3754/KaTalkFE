import React, { FC } from 'react';
import {
  NameBarS,
  NavContainerS,
  LeftArrowIcon,
  SearchIcon,
  ToggleBarContainerS,
  ToggleBarS,
  HeaderContainerS,
} from './style';

const LeftArrow: FC = () => {
  return <LeftArrowIcon />;
};

const Search: FC = () => {
  return <SearchIcon></SearchIcon>;
};

const Toggle: FC = () => {
  return (
    <ToggleBarContainerS>
      {Array(3)
        .fill(1)
        .map((_) => (
          <ToggleBarS />
        ))}
    </ToggleBarContainerS>
  );
};

const Name: FC<{ name: string }> = ({ name }) => {
  return <NameBarS>{name}</NameBarS>;
};

export const Header: FC = () => {
  return (
    <HeaderContainerS>
      <LeftArrow></LeftArrow>
      <Name name="롤 프로빌더"></Name>
      <NavContainerS>
        <Search></Search>
        <Toggle />
      </NavContainerS>
    </HeaderContainerS>
  );
};
