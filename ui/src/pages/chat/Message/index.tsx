import React from 'react';
import { useAppSelector } from '../../../app/hooks';
import classNames from 'classnames';
import { MessageProps } from './model';

const Message: React.FC<MessageProps> = ({ uid, content, timestamp, id }) => {
	const UUID = useAppSelector<string>(state => state.userState.user.UID);
	const isSent = uid === UUID;
	
	const date = new Date(timestamp);
	const dateString = `${ date.getHours() < 10 ? '0' + date.getHours() : date.getHours() }:` +
		`${ date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes() }`;
	
	const textElement = isSent ? (
		<>
			<span className={ 'date' }>
				{ dateString }
			</span>
			<span className={ 'text-content' }>
				<span className={ 'text' }>
					{ content }
				</span>
			</span>
		</>
	) : (
		<>
			<span className={ 'text-content' }>
				<span className={ 'text' }>
					{ content }
				</span>
			</span>
			<span className={ 'date' }>
				{ dateString }
			</span>
		</>
	);
	
	return (
		<div className={ classNames('message mx-1 my-3', { sent: isSent }) }>
			<div className={ 'content flex justify-start' }>
				{ textElement }
			</div>
		</div>
	);
};

export default Message;
