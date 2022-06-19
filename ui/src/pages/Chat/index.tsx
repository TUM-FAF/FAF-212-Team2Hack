import './Chat.scss';
import React from 'react';
import { useAppSelector } from '../../app/hooks';
import User from '../../features/user/User';
import { Avatar } from '@mui/material';
import { blue } from '@mui/material/colors';
import chatUserSrc from '../../assets/images/user.svg';
import TextArea from './TextArea/index';
import InputField from './InputField/index';

const Chat: React.FC<ChatProps> = () => {
	const chatUser = useAppSelector<User>(state => state.chatUserState.user);
	
	return (
		<div className={ 'wrapper h-screen max-h-screen' }>
			<div className={ 'Chat-header h-1/10 flex items-center justify-start border-b ' }>
				<Avatar
					alt={ chatUser.name }
					src={ chatUserSrc }
					sx={ { width: 48, height: 48, bgcolor: blue[300], display: 'inline-block', margin: '0 15px' } }
				/>
				<span>
					{ chatUser.name } { chatUser.surname }
				</span>
			</div>
			<TextArea/>
			<InputField/>
		</div>
	);
};

export default Chat;