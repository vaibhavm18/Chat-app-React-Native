import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export interface Chat {
  oldChats: Map<string, message[]>;
  newChats: Map<string, message[]>;
}

export type message = {
  id: string;
  user: {
    username: string;
    id: string;
  };
  chatMessage: string;
};

const initialState: Chat = {
  newChats: new Map(),
  oldChats: new Map(),
};

export const personalChatSlice = createSlice({
  name: 'personalChat',
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

export const {addNewChat, addOldChats} = personalChatSlice.actions;
export default personalChatSlice.reducer;
