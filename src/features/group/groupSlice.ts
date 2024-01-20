import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export interface GroupState {
  grops: group[];
}

type group = {
  id: string;
  groupname: string;
};

const initialState: GroupState = {
  grops: [],
};

type userId = {
  id: string;
};

export const groupSlice = createSlice({
  name: 'group',
  initialState,
  reducers: {
    addGroup: (state, {payload}: PayloadAction<group[]>) => {
      if (payload.length === 0) {
        return;
      }
      payload.forEach(val => {
        state.grops.push(val);
      });
    },
    removeGroup: (state, {payload}: PayloadAction<userId>) => {
      state.grops = state.grops.filter(val => val.id !== payload.id);
    },
  },
});

export const {addGroup, removeGroup} = groupSlice.actions;
export default groupSlice.reducer;
