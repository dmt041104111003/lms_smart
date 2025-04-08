import axios from 'axios';

const api = axios.create({
    baseURL: 'https://server-lms-2l7i.onrender.com',
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add a request interceptor for handling tokens if needed
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
