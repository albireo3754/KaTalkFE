import React, { FC, memo } from 'react';
import { ButtonS } from '../BasicCard/style';
import { ButtonContent } from '../../../types';
import { inputChat } from '../../../slices';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store';

export const Button: FC<{ content: ButtonContent; type: string }> = memo(
  ({ content, type }) => {
    const dispatch = useDispatch<AppDispatch>();
    const onClick = () => {
      dispatch(inputChat(content.messageText));
    };

    if (type === 'BasicCard') {
      return <ButtonS onClick={onClick}>{content.label}</ButtonS>;
    }
    return <ButtonS>"꽝"</ButtonS>;
  }
);
