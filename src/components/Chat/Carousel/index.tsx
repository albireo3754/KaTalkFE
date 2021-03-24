import React, { FC, memo, useRef, useEffect } from 'react';
import { CarouselS } from './style';
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
    return <CarouselS>{renderCarouselContent(content)}</CarouselS>;
  }
);
