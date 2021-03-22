import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchData, ChatContent } from '../utils';
import { RootState, AppThunk } from '../store';
import React from 'react';
interface ChatContentState {
  chatContents: ChatContent[];
}

const initialState: ChatContentState = {
  chatContents: [],
};

export const getResponse = createAsyncThunk<ChatContent, string>(
  'input/chat',
  async (chat: string, thunkAPI) => {
    const chatContent = await fetchData(chat);
    console.log(JSON.stringify(chatContent));
    return JSON.stringify(chatContent);
  }
);

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    inputChat: (state, { payload }) => {
      state.chatContents.push(payload);
    },
  },
  extraReducers: {
    [getResponse.fulfilled.type]: (state: ChatContentState, { payload }) => {
      state.chatContents.push(payload);
    },
  },
});

export const selectChatContent = (state: RootState): ChatContent[] =>
  state.input.chatContents;
export const { inputChat } = inputSlice.actions;
export default inputSlice.reducer;
