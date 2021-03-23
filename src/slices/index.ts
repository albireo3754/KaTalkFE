import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchData, ContentFetched } from '../utils';
import { UserChat, ChatContent } from '../types';
import { RootState } from '../store';
interface ChatContentState {
  chatContents: ChatContent[];
}

const initialState: ChatContentState = {
  chatContents: [],
};

export const getResponse = createAsyncThunk<ContentFetched, UserChat>(
  'input/chat',
  async (chat) => {
    const chatContent = await fetchData(chat);
    return chatContent;
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
      state.chatContents.push({
        ...payload.template.outputs[0],
        ...payload.context,
      });
    },
  },
});

export const selectChatContent = (state: RootState): ChatContent[] =>
  state.input.chatContents;
export const { inputChat } = inputSlice.actions;
export default inputSlice.reducer;
