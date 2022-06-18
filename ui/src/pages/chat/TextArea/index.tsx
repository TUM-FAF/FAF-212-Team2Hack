import React from 'react';
import Message from '../Message/index';

import messages from '../../../features/messages/messages.mock';

const TextArea: React.FC<TextAreaProps> = () => {
	const messageComponents: JSX.Element[] = messages.map(({ uid, content, timestamp, id }) =>
		<Message uid={ uid } content={ content } timestamp={ timestamp } key={ id } id={ id }/>
	);
	
	return (
		<div className={ 'text-area h-8/10 overflow-y-auto' }>
			{ messageComponents }
		</div>
	);
};

export default TextArea;
