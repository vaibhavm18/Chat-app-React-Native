import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export interface ChatState {
  newChats: {
    [key: string]: message[];
  };
  oldChats: {
    [key: string]: message[];
  };
}

export type message = {
  id: string;
  user: {
    username: string;
    id: string;
  };
  chatMessage: string;
};

const initialState: ChatState = {
  newChats: {},
  oldChats: {},
};

const personalChatSlice = createSlice({
  name: 'personalChat',
  initialState,
  reducers: {
    addNewChat: (state, {payload}: PayloadAction<message>) => {
      if (payload.id in state.newChats) {
        state.newChats[payload.id].push(payload);
      }
      state.newChats[payload.id] = [payload];
    },
    addOldChats: (state, {payload}: PayloadAction<message[]>) => {
      if (payload.length === 0) {
        return;
      }

      if (!(payload[0].id in state.newChats)) {
        state.newChats[payload[0].id] = [];
      }
      payload.forEach(val => {
        state.newChats[payload[0].id].push(val);
      });
    },
  },
});

// export const getMessagesById = (state: ChatState, id: string) =>
//   state.newChats.get(id);

// export const {addNewChat, addOldChats} = personalChatSlice.actions;
export default personalChatSlice.reducer;
