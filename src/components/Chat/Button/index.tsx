import React, { FC, memo } from 'react';
import { ButtonS } from '../BasicCard/style';
import { ButtonContent } from '../../../types';
import {
  inputChat,
  inputRuneListCard,
  inputItemListCard,
  inputSkillTextCard,
} from '../../../slices';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store';
export const Button: FC<{
  content: ButtonContent;
  type: string;
  clickContent: any;
}> = memo(({ content, type, clickContent }) => {
  const dispatch = useDispatch<AppDispatch>();
  const onClick = () => {
    dispatch(inputChat(content.messageText));
  };
  if (type === 'BasicCard') {
    if (content.label[0] === '룬') {
      return (
        <ButtonS
          onClick={() => {
            dispatch(inputRuneListCard(clickContent));
          }}>
          {content.label}
        </ButtonS>
      );
    }
    if (content.label[0] === '최') {
      return (
        <ButtonS
          onClick={() => {
            dispatch(inputItemListCard(clickContent));
          }}>
          {content.label}
        </ButtonS>
      );
    }
    if (content.label[0] === '스') {
      return (
        <ButtonS
          onClick={() => {
            dispatch(inputSkillTextCard(clickContent));
          }}>
          {content.label}
        </ButtonS>
      );
    }
    return <ButtonS onClick={onClick}>{content.label}</ButtonS>;
  }
  return <ButtonS>"꽝"</ButtonS>;
});
