import React, { FC, memo, useRef, useEffect } from 'react';
import { BotChatContainers } from './style';
import { Time } from '../Time';
import { BotChat } from '../../../types';
import { Carousel } from '../Carousel';
import { ListCard } from '../ListCard';

function renderContent(content: BotChat | BotChat[]) {
  if ('carousel' in content) {
    return <Carousel content={content.carousel} />;
  }
  if ('listCard' in content) {
    return <ListCard content={content.listCard} />;
    // return <SimpleTextUser content="listcard" />;
  }
}

export const Bot: FC<{ content: BotChat | BotChat[] }> = memo(({ content }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ref.current && ref.current.scrollIntoView();
  }, []);

  return (
    <BotChatContainers ref={ref}>
      {renderContent(content)}
      <Time />
    </BotChatContainers>
  );
});
