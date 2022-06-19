import { createSlice } from '@reduxjs/toolkit';
import User from './User';
import users from './Users.mock';

const initialState: { user: User } = {
	user: users[0]
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		changeUser(state, action: { payload: User, type: string }) {
			state.user = action.payload;
		}
	}
});

export default userSlice.reducer;
export const { changeUser } = userSlice.actions;
