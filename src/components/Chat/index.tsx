import React, { FC, useRef } from 'react';
import { BackgroundS } from './style';
import { selectChatContent } from '../../slices';
import { useSelector } from 'react-redux';
import { ChatContent } from '../../types';
import { SimpleTextUser } from './SimpleText';
import { Carousel } from './Carousel';

function renderChat(content: ChatContent): JSX.Element {
  console.log(content);
  if (typeof content === 'string') {
    return <SimpleTextUser content={content} />;
  }
  if (Object.keys(content).includes('carousel')) {
    return <Carousel content={content.carousel} />;
  }
  if (Object.keys(content).includes('listcard')) {
    // return <ListCard content={content.listcard} />;
    return <SimpleTextUser content="listcard" />;
  }
  return <SimpleTextUser content="실패용" />;
}

export const Chat: FC = () => {
  const chatContent = useSelector(selectChatContent);
  return (
    <BackgroundS>
      {chatContent.map((content: ChatContent, i) => {
        return renderChat(content);
      })}
    </BackgroundS>
  );
};
