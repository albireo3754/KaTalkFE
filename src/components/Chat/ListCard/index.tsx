import React, { FC, memo, useEffect, useRef } from 'react';
import { TitleP, ListCardS } from './style';
import { ListCardContent, SimpleCardContent } from '../../../types';
import { SimpleCard } from '../SimpleCard';

export const ListCard: FC<{ content: ListCardContent }> = memo(
  ({ content }) => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
      ref.current && ref.current.scrollIntoView();
    }, []);

    return (
      <ListCardS ref={ref}>
        <TitleP>{content.title}</TitleP>
        {content.items.map((item) => {
          return item.title && <SimpleCard content={item} />;
        })}
      </ListCardS>
    );
  }
);
