import axios, { type AxiosInstance } from 'axios';

export default class API {

    private isProduction: boolean;
    private host: string;
    private baseURL: string;
    public axiosInstance: AxiosInstance;
    
    constructor() {
        this.isProduction = process.env.NODE_ENV === 'production';
        this.host = this.isProduction ? 'api.cloud.nexent.dev' : '127.0.0.1:8000';
        this.baseURL = this.isProduction ? `https://${this.host}/v1` : `http://${this.host}/v1`;
        this.axiosInstance = axios.create({
            baseURL: this.baseURL,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
    }
    
    async getAppTemplates(featured: boolean = false) {
        const response = await this.axiosInstance.get(`/marketplace/app-templates/?featured-apps=${featured}`);
        return response.data;
    }
}