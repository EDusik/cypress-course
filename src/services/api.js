import axios from 'axios';

import { environment } from '../environments';

export const getRepositories = () => {
    return axios.get(`${environment.url}${environment.user}/repos`);
}

export const getUser = () => {
    return axios.get(`${environment.url}${environment.user}`); 
}

export const getEmail = () => {
    return axios.get(`${environment.url}${environment.user}/${environment.public}`); 
}
