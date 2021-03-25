import React, { FC, memo } from 'react';
import {
  ButtonContainerS,
  BasicCardS,
  TitleP,
  DescriptionP,
  ThumbNailsS,
} from './style';
import { BasicCardContent } from '../../../types';
import { Button } from '../Button';

export const BasicCard: FC<{ content: BasicCardContent }> = memo(
  ({ content }) => {
    console.log(content);
    return (
      <BasicCardS>
        {/* header */}

        <ThumbNailsS img={content.thumbnail.imageUrl} />
        <TitleP>{content.title}</TitleP>
        <DescriptionP>{content.description}</DescriptionP>
        {/* button */}
        <ButtonContainerS>
          {content.buttons.map((button, i) => {
            return (
              i !== content.buttons.length - 1 && (
                <Button
                  content={button}
                  clickContent={content.buttons[content.buttons.length - 1]}
                  type="BasicCard"
                />
              )
            );
          })}
        </ButtonContainerS>
      </BasicCardS>
    );
  }
);
