import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Message from './Message';
import messages from './messages.mock';
import axios from 'axios';

const initialState: {
	status: 'rejected' | 'idle' | 'pending' | 'fulfilled', messages: Message[], error: string | null | undefined
} = {
	messages,
	status: 'idle',
	error: null
};

const messagesSlice = createSlice({
	name: 'message',
	initialState,
	reducers: {
		addMessage(state, action: { payload: Message }) {
			state.messages.push(action.payload);
			// axios.post('/123', JSON.stringify(action.payload));
		}
	},
	extraReducers(builder) {
		builder.addCase(fetchMessages.rejected, (state, action) => {
			state.status = 'rejected';
			state.error = action.error.message;
		}).addCase(fetchMessages.pending, (state, action) => {
			state.status = 'pending';
		}).addCase(fetchMessages.fulfilled, (state, action) => {
			state.status = 'fulfilled';
			state.messages = action.payload;
		});
	}
});

export const fetchMessages = createAsyncThunk<Message[]>('message/get', async () => {
	const res = await axios.get<string>('/123');
	const text = await res.data;
	return JSON.parse(text) as Message[];
});

export default messagesSlice.reducer;
export const { addMessage } = messagesSlice.actions;
