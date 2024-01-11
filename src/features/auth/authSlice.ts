import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export interface AuthState {
  username: string | null;
  token: string | null;
  isLogin: boolean;
  _id: string | null;
}

const initialState: AuthState = {
  isLogin: false,
  token: null,
  username: null,
  _id: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate: (state, {payload}: PayloadAction<AuthState>) => {
      state.isLogin = true;
      state.token = payload.token;
      state.username = payload.username;
      state._id = payload._id;
    },

    logout: state => {
      state.isLogin = false;
      state.token = null;
      state.username = null;
      state._id = null;
    },
  },
});

export const {authenticate, logout} = authSlice.actions;
export default authSlice.reducer;
