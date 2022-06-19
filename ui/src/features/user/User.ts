export default interface User {
	UID: string;
	firstName: string;
	lastName: string;
	password: string;
	profileImage: null;
	description: string;
	university: string | null;
	school: string | null;
	clubs: string[] | null;
	username: string;
	connections: string[] | null;
}
