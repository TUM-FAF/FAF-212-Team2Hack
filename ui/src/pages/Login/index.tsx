import React, { ChangeEvent, useCallback, useState } from 'react';
import { Box, Button, Input } from '@mui/material';
import axios from 'axios';
import { API_URL } from '../../constants';
import { useAppDispatch } from '../../app/hooks';
import { changeUser } from '../../features/user/userSlice';
import User from '../../features/user/User';
import SignupForm from './SignupForm';

type Auth = {
	access_token: string;
}

const Login: React.FC = () => {
	const dispatch = useAppDispatch();
	const [register, setRegister] = useState<boolean>(false);
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [token, setToken] = useState<string>('');
	
	const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setUsername(e.target.value);
	};
	
	const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};
	
	const handleOnLogin = useCallback(
		async () => {
			try {
				const result = await axios.post<Auth>(API_URL + 'login', {
					username: username,
					password: password
				});
				if (result) {
					const config = {
						headers: {
							Authorization: `Bearer ${ result.data.access_token }`
						}
					};
					const t = await axios.get(API_URL + 'profile', config);
					dispatch(changeUser(t.data as User));
					localStorage.setItem('token', result.data.access_token);
				}
			} catch (e) {
				console.error(e);
			}
		},
		[username, password, dispatch]);
	
	return (
		<div className={ 'w-screen h-screen flex justify-center items-center' }>
			<div className={'flex flex-col'}>
				<Button onClick={ () => {
					setRegister(prev => !prev);
				} }>
					go to { register ? 'login' : 'register' }
				</Button>
				{ register ? <SignupForm/> : <Box display="flex" flexDirection="column" gap="4px">
					<Input placeholder={ 'LOGIN' } onChange={ handleUsernameChange }/>
					<Input placeholder={ 'PASSWORD' } onChange={ handlePasswordChange }/>
					<Button onClick={ handleOnLogin }>Login</Button>
				</Box> }
			</div>
		</div>
	);
};

export default Login;