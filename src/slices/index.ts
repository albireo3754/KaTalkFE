import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchData, ContentFetched, listCardParser } from '../utils';
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
    inputRuneListCard: (state, { payload }) => {
      state.chatContents.push([
        listCardParser({
          type: '주력 룬',
          runeName: payload.runeName.slice(0, 4),
          runeDetail: payload.runeDetail.slice(0, 4),
        }),
        listCardParser({
          type: '보조 룬',
          runeName: payload.runeName.slice(4),
          runeDetail: payload.runeDetail.slice(4),
        }),
      ]);
    },
    inputItemListCard: (state, { payload }) => {
      state.chatContents.push([
        listCardParser({
          type: '아이템',
          item: payload.item,
        }),
      ]);
    },
    inputSkillTextCard: (state, { payload }) => {
      state.chatContents.push([
        listCardParser({
          type: '스킬',
          skills: payload.skill,
        }),
      ]);
    },
  },
  extraReducers: {
    [getResponse.fulfilled.type]: (state: ChatContentState, { payload }) => {
      payload.template.outputs[0].carousel.items.map((v: any, i: number) => {
        v.buttons.push(payload.context.values[i].params);
      });
      state.chatContents.push({
        ...payload.template.outputs[0],
      });
    },
    [getResponse.rejected.type]: (state, { payload }) => {
      state.chatContents.push({
        simpleText: '입력이 잘못되었을 수도 있고 서버가 터졌을 수도 있습니다.!',
      });
    },
  },
});

export const selectChatContent = (state: RootState): ChatContent[] =>
  state.input.chatContents;
export const {
  inputChat,
  inputRuneListCard,
  inputItemListCard,
  inputSkillTextCard,
} = inputSlice.actions;
export default inputSlice.reducer;
