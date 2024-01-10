import {createSlice} from '@reduxjs/toolkit';

export interface GroupType {}

const initialState: GroupType = {};

export const groupSlice = createSlice({
  name: 'group',
  initialState,
  reducers: {},
});

export const {} = groupSlice.actions;
export default groupSlice.reducer;
