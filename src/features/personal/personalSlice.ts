import {createSlice} from '@reduxjs/toolkit';

export interface PersonalState {}

const initialState: PersonalState = {};
export const personalSlice = createSlice({
  name: 'personal',
  initialState,
  reducers: {},
});

export const {} = personalSlice.actions;
export default personalSlice.reducer;
