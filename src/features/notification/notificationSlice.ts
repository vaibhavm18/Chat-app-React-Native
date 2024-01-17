import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export interface NotificationState {
  notifications: notification[];
}

type notification = {
  id: string;
  username: string;
};

const initialState: NotificationState = {
  notifications: [],
};

type notoficationId = {
  id: string;
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addNotification: (state, {payload}: PayloadAction<notification[]>) => {
      if (payload.length === 0) {
        return;
      }
      payload.forEach(val => {
        state.notifications.push(val);
      });
    },
    removeNotification: (state, {payload}: PayloadAction<notoficationId>) => {
      state.notifications = state.notifications.filter(
        val => val.id !== payload.id,
      );
    },
  },
});

export const {} = notificationSlice.actions;
export default notificationSlice.reducer;
