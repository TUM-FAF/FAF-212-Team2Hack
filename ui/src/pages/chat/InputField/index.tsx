import React, { useEffect, useRef } from 'react';
import { Button, Input } from '@mui/material';
import Send from '@mui/icons-material/Send';
import Message from '../../../features/messages/Message';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { addMessage } from '../../../features/messages/messagesSlice';
import { nanoid } from 'nanoid';

const InputField: React.FC<InputProps> = () => {
	const user = useAppSelector(state => state.userState.user);
	const dispatch = useAppDispatch();
	
	const createMessage = (content: string): Message => {
		return {
			uid: user?.UID || '',
			content,
			timestamp: Date.now(),
			id: nanoid()
		};
	};
	
	const sendMessage = (message: Message) => {
		dispatch(addMessage(message));
	};
	
	const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
		if (event.key !== 'Enter') return;
		event.preventDefault();
		const input = document.getElementById('main-input') as HTMLInputElement;
		if (input!.value.trim() === '') return;
		sendMessage(createMessage(input!.value.trim()));
		input!.value = '';
	};
	
	const handleButtonClick: React.MouseEventHandler<HTMLButtonElement> = () => {
		const input = document.getElementById('main-input') as HTMLInputElement;
		if (input!.value.trim() === '') return;
		sendMessage(createMessage(input!.value.trim()));
		input!.value = '';
	};
	
	return (
		<div className={ 'h-1/10 overflow-x-auto flex items-stretch' } >
			<Input
				type={ 'text' }
				id={ 'main-input' }
				sx={ { width: '80%', borderRadius: '0', display: 'inline-block', padding: '2px', overflowX: 'auto' } }
				onKeyDown={ handleInputKeyDown }
			/>
			<Button
				variant={ 'contained' }
				className={ 'h-12' }
				sx={ { borderRadius: '0', height: '100%', width: '20%' } }
				onClick={ handleButtonClick }
			>
				<Send/>
			</Button>
		</div>
	);
};

export default InputField;
