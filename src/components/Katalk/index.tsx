export * from './css';
import React from 'react';
import { Header } from '../Header';
import { Form } from '../Form';
import { Chat } from '../Chat';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: "NotoSansKR";
      src: url("../fonts/notoSansKR/NotoSans-Bold.woff") format("woff");
      font-style: normal;
  }

  @font-face {
    font-family: "NotoSansKR";
    src: url("../fonts/openSans/OpenSans-SemiBold.woff") format("woff");
    unicode-range: U+0020-007E;
    font-style: normal;
  }
  html{
    height: 100%;
    width: 100%;
    min-width: 320px;
    min-height: 320px;
  }
  
  body{
    
  }
  #root{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
      <Form />
      <GlobalStyle />
    </>
  );
};
