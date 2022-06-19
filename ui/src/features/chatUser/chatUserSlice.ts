import { createSlice } from '@reduxjs/toolkit';
import User from '../user/User'

const initialState: { user: User } = {
	user: {
		UID: '123',
		firstName: 'alex',
		lastName: 'dobrojan',
		profileImage: null,
		password: '12345',
		description: '',
		university: '',
		school: '',
		clubs: [],
		username: 'warek',
		connections: []
	}
};

const userSlice = createSlice({
	name: 'chat-user',
	initialState,
	reducers: {
		changeChatUser(state, action: { payload: User, type: string }) {
			state.user = action.payload;
		}
	}
});

export default userSlice.reducer;
export const { changeChatUser } = userSlice.actions;
