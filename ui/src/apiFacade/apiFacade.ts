import axios, { AxiosInstance } from 'axios';
//
// import { TemplatesVariables } from '../containers/market-templates';
// import { GetTemplatesResponse } from './api-facade.types';
//
// export default class ApiFacade {
// 	client: AxiosInstance;
//
// 	constructor(apiUrl: string, token: string) {
// 		this.client = axios.create({ baseURL: apiUrl });
// 		this.client.defaults.headers['Authorization'] = `Bearer ${token}`;
// 	}
//
// 	async getTemplates(
// 		params?: TemplatesVariables,
// 	): Promise<GetTemplatesResponse> {
// 		const { data, headers } = await this.client.get('flow/v1/templates', {
// 			params,
// 		});
// 		const templates = data;
// 		const count = headers['x-pagination-total'];
// 		return { templates, count };
// 	}
// }
