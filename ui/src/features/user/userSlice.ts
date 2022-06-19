import { createSlice } from '@reduxjs/toolkit';
import User from './User';

const initialState: { user: User | null } = {
	user:  null
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
