import React, { FC, useEffect, useRef } from 'react';
import { BackgroundS } from './style';
import { selectChatContent } from '../../slices';
import { useSelector } from 'react-redux';
import { ChatContent, UserChat } from 'src/utils';
import { SimpleTextUser } from './SimpleText';
export const Chat: FC = () => {
  const chatContent = useSelector(selectChatContent);

  function makeChat(content: ChatContent): JSX.Element {
    console.log(content);
    if (typeof content == 'string') {
      return <SimpleTextUser content={content} />;
    }
    if (Object.keys(content)[0] == 'carousel') {
      console.log('hi');
    }
    return <SimpleTextUser content="실패용" />;
  }
  return (
    <BackgroundS>
      {chatContent.map((content: ChatContent) => {
        return makeChat(content);
      })}
    </BackgroundS>
  );
};
