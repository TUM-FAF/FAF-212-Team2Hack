import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userSlice from '../features/user/userSlice';
import chatUserSlice from '../features/chatUser/chatUserSlice';
import messagesSlice from '../features/messages/messagesSlice';

export const store = configureStore({
	reducer: {
		userState: userSlice,
		chatUserState: chatUserSlice,
		messageState: messagesSlice
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
	RootState,
	unknown,
	Action<string>>;
