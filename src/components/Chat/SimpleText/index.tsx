import React, { FC, memo, useRef, useEffect } from 'react';
import { UserChatS, UserChatContainerS } from './style';
import { Time } from '../Time';
export const SimpleTextUser: FC<{ content: string }> = memo(({ content }) => {
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
