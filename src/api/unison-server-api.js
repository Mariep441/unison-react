import axios from 'axios';


const accessToken ='secretpasswordnotrevealedtoanyone';
const apiUrl = 'http://localhost:4000/api';

const authAxios = axios.create ({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});


export const getTasks = () => {
  return fetch(`http://localhost:4000/api/tasks`)
        .then(res => res.json());
};


export const getTask = id => {
  return fetch(
    authAxios.get(`/task/${id}`))
    .then(res => res.json());
};

export const getProcesses = () => {
  return fetch('http://localhost:4000/api/processes')
      .then(res => res.json())
};

export const getTaskFeedbacks = id => {
  return fetch(
    authAxios.get(`/task/${id}/feedbacks`))
    .then(res => res.json())
    .then(json => json.results);
};