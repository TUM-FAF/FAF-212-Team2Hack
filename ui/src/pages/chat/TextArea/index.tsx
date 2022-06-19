import React, { useRef, useEffect } from 'react';
import Message from '../Message/index';
import { useAppSelector } from '../../../app/hooks';

const TextArea: React.FC<TextAreaProps> = () => {
	const messagesCount = useAppSelector(state => state.messageState.messages.length);
	const wrapperRef = useRef<HTMLDivElement>(null);
	const messages = useAppSelector(state => state.messageState.messages);
	
	const messageComponents: JSX.Element[] = messages.map(({ uid, content, timestamp, id }) =>
		<Message uid={ uid } content={ content } timestamp={ timestamp } key={ id } id={ id }/>
	);
	
	useEffect(() => {
		wrapperRef.current!.scrollTop = wrapperRef.current!.scrollHeight;
	}, [messagesCount]);
	
	return (
		<div className={ 'text-area h-8/10 overflow-y-auto' } ref={ wrapperRef }>
			{ messageComponents }
		</div>
	);
};

export default TextArea;
