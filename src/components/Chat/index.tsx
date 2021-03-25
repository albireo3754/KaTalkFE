import React, { FC } from 'react';
import { BackgroundS } from './style';
import { selectChatContent } from '../../slices';
import { useSelector } from 'react-redux';
import { ChatContent, BotChat } from '../../types';
import { SimpleTextUser } from './SimpleText';
import { Bot } from './Bot';
function renderChat(content: ChatContent | BotChat[]): JSX.Element {
  console.log(content);
  if (typeof content === 'string') {
    return <SimpleTextUser content={content} />;
  }
  return <Bot content={content} />;
}

export const Chat: FC = () => {
  const chatContent = useSelector(selectChatContent);
  return (
    <BackgroundS>
      {chatContent.map((content) => {
        return renderChat(content);
      })}
    </BackgroundS>
  );
};
