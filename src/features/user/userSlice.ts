import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export interface UserState {
  users: user[];
}

type user = {
  id: string;
  username: string;
};

const initialState: UserState = {
  users: [],
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUsers: (state, {payload}: PayloadAction<user[]>) => {
      if (payload.length === 0) {
        return;
      }
      payload.forEach(val => {
        state.users.push(val);
      });
    },
    removeUser: (state, {payload}: PayloadAction<user>) => {
      state.users = state.users.filter(val => val.id !== payload.id);
    },
  },
});

export const {addUsers, removeUser} = userSlice.actions;
export default userSlice.reducer;
