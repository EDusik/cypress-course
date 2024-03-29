import axios from 'axios';

import { environment } from '../environments/environments';

export const getRepositories = () => {
  return axios.get(`${environment.url}${environment.user}/repos`);
}

export const getUser = () => {
  return axios.get(`${environment.url}${environment.user}`); 
}
