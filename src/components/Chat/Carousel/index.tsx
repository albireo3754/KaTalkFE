import React, { FC, memo, useRef, useEffect } from 'react';
import { CarouselS } from './style';
import { BotChatContainers } from '../Container';
import { Time } from '../Time';
import { CarouselContent } from '../../../types';
import { BasicCard } from '../BasicCard';

function renderCarouselContent(content: CarouselContent) {
  if (content.type === 'basicCard') {
    return content.items.map((content) => <BasicCard content={content} />);
  }
}

export const Carousel: FC<{ content: CarouselContent }> = memo(
  ({ content }) => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
      ref.current && ref.current.scrollIntoView();
    }, []);

    return (
      <BotChatContainers ref={ref}>
        <CarouselS>{renderCarouselContent(content)}</CarouselS>
        <Time />
      </BotChatContainers>
    );
  }
);
