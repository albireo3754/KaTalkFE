import React, { FC } from 'react';
import { ChatInputS, ChatMenuIcon, ChatContainerS } from './style';

const ChatMenu: FC = () => {
  return <ChatMenuIcon />;
};

const ChatInput: FC = () => {
  return <ChatInputS></ChatInputS>;
};

export const Form: FC = () => {
  return (
    <ChatContainerS>
      <ChatMenu />
      <ChatInput></ChatInput>
    </ChatContainerS>
  );
};
