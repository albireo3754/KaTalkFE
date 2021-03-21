import React, { FC, useState, useCallback } from 'react';
import { ChatInputS, ChatMenuIcon, ChatContainerS, ChatFormS } from './style';
import { inputChat, getResponse } from '../../slices';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
const ChatMenu: FC = () => {
  return <ChatMenuIcon />;
};

const ChatInput: FC = () => {
  console.log('chatInput?');
  const [text, setText] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(inputChat(text));
    dispatch(getResponse(text));
    setText('');
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <ChatFormS onSubmit={onSubmit}>
      <ChatInputS
        placeholder="챗봇에게 메시지 보내기"
        type="text"
        value={text}
        onChange={onChange}></ChatInputS>
    </ChatFormS>
  );
};

export const Form: FC = () => {
  return (
    <ChatContainerS>
      <ChatMenu />
      <ChatInput></ChatInput>
    </ChatContainerS>
  );
};
