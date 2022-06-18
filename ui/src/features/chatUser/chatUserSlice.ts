import { createSlice } from '@reduxjs/toolkit';
import User from '../user/User';
import users from '../user/Users.mock';

const initialState: { user: User } = {
	user: users[1]
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
