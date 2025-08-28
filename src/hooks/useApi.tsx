import API from "../services/api.services";

export const useApi = (): API => {

    // Create API instance
    const api = new API();

    // Intercept on request
    api.axiosInstance.interceptors.request.use(
        (config: any) => {
            return config
        },
        (error: any) => {
            throw error;
        }
    );

    // Intercept on response
    api.axiosInstance.interceptors.response.use(
        (response: any) => {
            response.data = response.data.data
            return response
        },
        (error: any) => {
            throw error;
        }
    );

    return api
}
