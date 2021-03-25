import React, { FC, memo } from 'react';
import {
  SimpleCardTextContentS,
  SimpleCardS,
  TitleP,
  DescriptionP,
  ThumbNailImg,
} from './style';
import { SimpleCardContent } from '../../../types';

export const SimpleCard: FC<{ content: SimpleCardContent }> = memo(
  ({ content }) => {
    return (
      <SimpleCardS>
        <SimpleCardTextContentS>
          <TitleP>{content.title}</TitleP>
          <DescriptionP>{content.description}</DescriptionP>
        </SimpleCardTextContentS>
        <ThumbNailImg src={content.thumbnail.imageUrl} />
      </SimpleCardS>
    );
  }
);
