import {createSlice} from '@reduxjs/toolkit';

export interface GroupState {}

const initialState: GroupState = {};

export const groupSlice = createSlice({
  name: 'group',
  initialState,
  reducers: {},
});

export const {} = groupSlice.actions;
export default groupSlice.reducer;
