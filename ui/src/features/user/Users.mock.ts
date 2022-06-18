import User from './User';

const users: User[] = [
	{
		UID: 'user-1',
		name: 'Ivan',
		surname: 'Ivanov',
		description: 'CS student',
		university: 'MIT',
		school: 'RandomSchool',
		clubs: ['Alligator'],
		connections: ['user-2', 'user-3']
	},
	{
		UID: 'user-2',
		name: 'Alex',
		surname: 'Dobrojan',
		description: 'CS student',
		university: 'TUM',
		school: 'OtherSchool',
		clubs: ['Alligator'],
		connections: ['user-1']
	},
	{
		UID: 'user-3',
		name: 'Denis',
		surname: 'Smocvin',
		description: 'CS student',
		university: 'TUM',
		school: 'RandomSchool',
		clubs: ['Sigmoid'],
		connections: ['user-1']
	}
]

export default users;
