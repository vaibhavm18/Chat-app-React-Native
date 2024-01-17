import {configureStore} from '@reduxjs/toolkit';
import authRedcer from '../features/auth/authSlice';
import groupChatSlice from '../features/group/chatSlice';
import groupSlice from '../features/group/groupSlice';
import notificationSlice from '../features/notification/notificationSlice';
import personalChatSlice from '../features/personal/chatSlice';
import personalSlice from '../features/personal/personalSlice';

export const store = configureStore({
  reducer: {
    auth: authRedcer,
    group: groupSlice,
    personal: personalSlice,
    personalChats: personalChatSlice,
    groupChats: groupChatSlice,
    notification: notificationSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
