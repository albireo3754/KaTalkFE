export * from './css';
import React from 'react';
import { Header } from '../Header';
import { Input } from '../Input';
import { Chat } from '../Chat';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    height: 100%;
    width: 100%;
    min-width: 320px;
    background-color: rgba(178, 199, 218, 0.9);
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  p {
  font-size: 0.75rem;
  }
`;

export const Katalk = () => {
  return (
    <>
      <Header />
      <Chat />
      <Input />
      <GlobalStyle />
    </>
  );
};
