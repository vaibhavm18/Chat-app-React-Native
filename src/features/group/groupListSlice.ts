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

export const groupSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    addGroupLists: (state, {payload}: PayloadAction<group[]>) => {
      if (payload.length === 0) {
        return;
      }
      payload.forEach(val => {
        state.grops.push(val);
      });
    },
    removeGroupList: (state, {payload}: PayloadAction<group>) => {
      state.grops = state.grops.filter(val => val.id !== payload.id);
    },
  },
});

export const {addGroupLists, removeGroupList} = groupSlice.actions;
export default groupSlice.reducer;
