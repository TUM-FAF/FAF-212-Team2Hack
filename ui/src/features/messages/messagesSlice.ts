import { createSlice } from '@reduxjs/toolkit';
import Message from './Message';
import messages from './messages.mock';

const initialState: { messages: Message[] } = {
	messages
};

const messagesSlice = createSlice({
	name: 'message',
	initialState,
	reducers: {
		addMessage(state, action: { payload: Message }) {
			state.messages.push(action.payload);
		}
	}
});

export default messagesSlice.reducer;
export const { addMessage } = messagesSlice.actions;
