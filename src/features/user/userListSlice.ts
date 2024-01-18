import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export interface UserState {
  users: user[];
}

type user = {
  id: string;
  username: string;
  friends: number;
  groups: number;
};

const initialState: UserState = {
  users: [],
};

export const userListSlice = createSlice({
  name: 'userslist',
  initialState,
  reducers: {
    addListUsers: (state, {payload}: PayloadAction<user[]>) => {
      if (payload.length === 0) {
        return;
      }
      payload.forEach(val => {
        state.users.push(val);
      });
    },
    removeListUser: (state, {payload}: PayloadAction<user>) => {
      state.users = state.users.filter(val => val.id !== payload.id);
    },
  },
});

export const {addListUsers, removeListUser} = userListSlice.actions;
export default userListSlice.reducer;
