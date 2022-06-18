import React, { useRef } from 'react';
import { Button, Input } from '@mui/material';
import Send from '@mui/icons-material/Send';

const InputField: React.FC<InputProps> = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	
	return (
		<div className={ 'h-1/10 overflow-x-auto flex items-stretch' }>
			<Input
				type={ 'text' }
				size={ 'small' }
				id={ 'main-input' }
				ref={ inputRef }
				sx={ { width: '80%', borderRadius: '0', display: 'inline-block', padding: '2px', overflowX: 'auto' } }
			/>
			<Button variant={ 'contained' } className={'h-12'} sx={ { borderRadius: '0', height: '100%' } }>
				<Send/>
			</Button>
		</div>
	);
};

export default InputField;