import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchData, ChatContent, ContentFetched, UserChat } from '../utils';
import { RootState } from '../store';
interface ChatContentState {
  chatContents: ChatContent[];
}

const initialState: ChatContentState = {
  chatContents: [],
};

export const getResponse = createAsyncThunk<ContentFetched, UserChat>(
  'input/chat',
  async (chat, thunkAPI) => {
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
      const {
        template: { outputs },
      } = payload;
      state.chatContents.push(outputs[0]);
    },
  },
});

export const selectChatContent = (state: RootState): ChatContent[] =>
  state.input.chatContents;
export const { inputChat } = inputSlice.actions;
export default inputSlice.reducer;
