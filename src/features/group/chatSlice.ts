import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Chat, message} from '../personal/chatSlice';

const initialState: Chat = {
  newChats: new Map(),
  oldChats: new Map(),
};

const groupChatSlice = createSlice({
  name: 'groupChat',
  initialState,
  reducers: {
    addNewChat: (state, {payload}: PayloadAction<message>) => {
      const hasChat = state.newChats.has(payload.id);
      if (!hasChat) {
        state.newChats.set(payload.id, []);
      }
      state.newChats.get(payload.id)?.push(payload);
    },
    addOldChats: (state, {payload}: PayloadAction<message[]>) => {
      if (payload.length === 0) {
        return;
      }

      const hasChat = state.newChats.has(payload[0].id);

      if (!hasChat) {
        state.newChats.set(payload[0].id, []);
      }

      payload.forEach(val => {
        state.newChats.get(payload[0].id)?.push(val);
      });
    },
  },
});

export const getMessagesById = (state: Chat, id: string) =>
  state.newChats.get(id);

export const {addNewChat, addOldChats} = groupChatSlice.actions;
export default groupChatSlice.reducer;
