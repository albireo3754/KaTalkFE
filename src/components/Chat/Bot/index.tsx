import React, { FC, memo, useRef, useEffect } from 'react';
import { BotChatContainers } from './style';
import { Time } from '../Time';
import { BotChat } from '../../../types';
import { Carousel } from '../Carousel';
import { ListCard } from '../ListCard';
import { SimpleTextBot } from '../SimpleText';

function renderContent(content: BotChat): JSX.Element {
  if ('carousel' in content) {
    return <Carousel content={content.carousel} />;
  }
  if ('listCard' in content) {
    return <ListCard content={content.listCard} />;
    // return <SimpleTextUser content="listcard" />;
  }
  if ('simpleText' in content) {
    return <SimpleTextBot content={content} />;
  }
  return <SimpleTextBot content={{ simpleText: '정보가 없습니다.' }} />;
}

export const Bot: FC<{ content: BotChat | BotChat[] }> = memo(({ content }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ref.current && ref.current.scrollIntoView();
  }, []);
  if (Array.isArray(content)) {
    return (
      <BotChatContainers ref={ref}>
        <div>{content.map((c) => renderContent(c))}</div>
        <Time />
      </BotChatContainers>
    );
  }
  return (
    <BotChatContainers ref={ref}>
      {renderContent(content)}
      <Time />
    </BotChatContainers>
  );
});
