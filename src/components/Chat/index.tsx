import React, { FC } from 'react';
import { BackgroundS } from './style';
import { selectChatContent } from '../../slices';
import { useSelector } from 'react-redux';
import { ChatContent } from 'src/utils';

export const Chat: FC = () => {
  const chatContent = useSelector(selectChatContent);

  return (
    <BackgroundS>
      {chatContent.map((content: ChatContent) => {
        return content;
      })}
    </BackgroundS>
  );
};
