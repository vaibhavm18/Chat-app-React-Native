import {createSlice} from '@reduxjs/toolkit';

export interface PersonalType {}

const initialState: PersonalType = {};
export const personalSlice = createSlice({
  name: 'personal',
  initialState,
  reducers: {},
});

export const {} = personalSlice.actions;
export default personalSlice.reducer;
