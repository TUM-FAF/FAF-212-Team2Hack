import axios, { AxiosInstance } from 'axios';

export default class ApiFacade {
	client: AxiosInstance;

	constructor(apiUrl: string, token: string) {
		this.client = axios.create({ baseURL: apiUrl });
		// @ts-ignore
		this.client.defaults.headers['Authorization'] = `Bearer ${token}`;
	}

}
