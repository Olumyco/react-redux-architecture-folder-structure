import axios from 'axios';

const baseUrl = 'https://afmpass.name.ng/afmconfig'

const instance = axios.create({
    timeout: 30000,
    baseURL: baseUrl
});

instance.interceptors.request.use(
    request => {
        // do something
        return request;
    },
    error => {
        // do something
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    response => {
        // do something
        return response;
    },
    error => {
        // do something
        return Promise.reject(error);
    }
);

export default instance;