import React, { FC, memo } from 'react';
import {
  ButtonS,
  ButtonContainerS,
  BasicCardS,
  TitleS,
  DescriptionS,
  ThumbNailsS,
} from './style';
import { BasicCardContent } from '../../../types';
import { Button } from '../Button';

export const BasicCard: FC<{ content: BasicCardContent }> = memo(
  ({ content }) => {
    console.log(content.buttons);
    return (
      <BasicCardS>
        {/* header */}

        <ThumbNailsS img={content.thumbnail.imageUrl} />
        <TitleS>{content.title}</TitleS>
        <DescriptionS>{content.description}</DescriptionS>
        {/* button */}
        <ButtonContainerS>
          {content.buttons.map((button) => {
            return <Button content={button} type="BasicCard" />;
          })}
        </ButtonContainerS>
      </BasicCardS>
    );
  }
);
