import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ChatState, message} from '../personal/chatSlice';

const initialState: ChatState = {
  newChats: {},
  oldChats: {},
};

const groupChatSlice = createSlice({
  name: 'groupChat',
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

// export const {addNewChat, addOldChats} = groupChatSlice.actions;
export default groupChatSlice.reducer;
