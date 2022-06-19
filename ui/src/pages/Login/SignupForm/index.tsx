import React, { useState } from 'react';
import { Input, Button, Box } from '@mui/material';
import InfoSignupForm from '../InfoSignupForm';

const SignupForm: React.FC<SignupFormProps> = () => {
	const [name, setName] = useState<string>('');
	const [surname, setSurname] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [username, setUsername] = useState<string>('');
	const [infoForm, setInfoForm] = useState<boolean>(false);
	
	const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setName(e.target.value);
	};
	
	const handleSurnameChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setSurname(e.target.value);
	};
	
	const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setUsername(e.target.value);
	};
	
	const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setPassword(e.target.value);
	};
	
	const handleRegistration: React.MouseEventHandler<HTMLButtonElement> = (e) => {
		setInfoForm(prev => !prev);
	};
	
	return (
		<>
			{ infoForm ?
				<InfoSignupForm
					firstName={ name }
					lastName={ surname }
					password={ password }
					username={ username }
				/> :
				<Box display="flex" flexDirection="column" gap="4px">
					<Input placeholder={ 'USERNAME' } value={ username } onChange={ handleUsernameChange }/>
					<Input placeholder={ 'NAME' } value={ name } onChange={ handleNameChange }/>
					<Input placeholder={ 'SURNAME' } value={ surname } onChange={ handleSurnameChange }/>
					<Input placeholder={ 'PASSWORD' } type={ 'password' } value={ password }
					       onChange={ handlePasswordChange }/>
					<Button onClick={ handleRegistration }>Register</Button>
				</Box>
			}
		</>
	);
};

export default SignupForm;
