import React, { useState } from 'react';
import { Input, Button, Box } from '@mui/material';
import User from '../../../features/user/User';
import { API_URL } from '../../../constants';
import axios from 'axios';
import { changeUser } from '../../../features/user/userSlice';
import { useAppDispatch } from '../../../app/hooks';

const InfoSignupForm: React.FC<InfoSignupFormProps> = ({ firstName, lastName, username, password }) => {
	const dispatch = useAppDispatch();
	const [school, setSchool] = useState<string>('');
	const [university, setUniversity] = useState<string>('');
	const [clubs, setClubs] = useState<string>('');
	const [description, setDescription] = useState<string>('');
	
	const handleUniChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setUniversity(e.target.value);
	};
	
	const handleSchoolChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setSchool(e.target.value);
	};
	
	const handleClubsChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setClubs(e.target.value);
	};
	
	const handleDescriptionChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setDescription(e.target.value);
	};
	
	const handleRegistration: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
		try {
			const result = await axios.post<User>(API_URL + 'users', {
				firstName, lastName, username, description,
				password, school, university, clubs, connections: []
			});
			
			if (result.data.username) {
				console.log(result.data);
				dispatch(changeUser(result.data as User));
			}
		} catch (e) {
			console.error(e);
		}
	};
	
	return (
		<div className={ 'w-screen h-screen flex justify-center items-center absolute left-0 top-0' }
		     style={ { backgroundColor: '#FFFFFF' } }>
			<Box display="flex" flexDirection="column" gap="4px">
				<Input placeholder={ 'SCHOOL' } value={ school } onChange={ handleSchoolChange }/>
				<Input placeholder={ 'UNIVERSITY' } value={ university } onChange={ handleUniChange }/>
				<Input placeholder={ 'CLUBS' } value={ clubs } onChange={ handleClubsChange }/>
				<Input placeholder={ 'ABOUT' } value={ description } onChange={ handleDescriptionChange }/>
				<Button onClick={ handleRegistration }>Send</Button>
			</Box>
		</div>
	);
};

export default InfoSignupForm;
