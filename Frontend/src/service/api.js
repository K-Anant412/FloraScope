import axios from "axios"

const API = axios.create({
    baseURL: "/api",
    headers: {
        "Content-Type": "application/json"
    },
});

API.interceptors.request.use(
    ( config ) => {
        const token = localStorage.getItem('token');
        if ( token ){
            config.headers.Authorization = `Bearer ${token}`;
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
    plantIdentify: ( filename ) => API.post('/plant/identify', { filename }),
    plantHistory: () => API.get('/plant/history'),
    plantData: () => API.get('/plant/show_plants'),
    plantDetails: ( id ) => API.get( '/plant/plant_details', { id }),
    plantRemoveHistory: () => API.delete('/plant/remove_history'),
    plantRemoveById: ( id ) => API.delete('/plant/remove_history_byid', { id }),
    plantCareDetails: ( id ) => API.get('/plant/care', { id })
}

export default API;