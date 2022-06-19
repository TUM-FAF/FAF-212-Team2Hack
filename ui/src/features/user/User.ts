export default interface User {
	UID: string;
	name: string;
	surname: string;
	description: string;
	university: string | null;
	school: string | null;
	clubs: string[] | null;
	/* UUID */
	connections: string[] | null;
}
