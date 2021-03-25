import React, { FC, memo, useRef, useEffect } from 'react';
import { UserChatS, BotChatS } from './style';
import { UserChatContainerS } from '../Container';
import { Time } from '../Time';
import { UserChat, SimpleText } from '../../../types';

export const SimpleTextUser: FC<{ content: UserChat }> = memo(({ content }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log(ref.current && ref.current.scrollIntoView());
  }, []);

  return (
    <UserChatContainerS>
      <Time />
      <UserChatS ref={ref}>{content}</UserChatS>
    </UserChatContainerS>
  );
});

export const SimpleTextBot: FC<{ content: SimpleText }> = memo(
  ({ content }) => {
    return <BotChatS>{content.simpleText}</BotChatS>;
  }
);
