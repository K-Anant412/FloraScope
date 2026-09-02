import axios from "axios"

const API = axios.create({
    baseURL: "/api",
});

API.interceptors.request.use(
    ( config ) => {
        const token = localStorage.getItem('token');
        if ( token ){
            config.headers.Authorization = `Bearer ${token}`;
        }

        if(config.data instanceof FormData) {
            delete config.headers["Content-Type"];
        }

        return config;
    },
    ( error ) => Promise.reject( error )
);

export const authService = {
    register: ( name, email, password ) => API.post('/auth/registration', { name, email, password}),
    login: ( email, password ) => API.post('auth/login', { email, password })
}

export const plantService = {
    plantIdentify: ( formData ) => API.post('/plant/identify', formData),
    plantHistory: () => API.get('/plant/history'),
    plantData: () => API.get('/plant/show_plants'),
    plantDetails: ( id ) => API.get( '/plant/plant_details', {params: { id }}),
    plantRemoveHistory: () => API.delete('/plant/remove_history'),
    plantRemoveById: ( id ) => API.delete('/plant/remove_history_byid', {params: { id }}),
    plantCareDetails: ( id ) => API.get('/plant/care', {params: { id }})
}

export default API;