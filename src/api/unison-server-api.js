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


export const getTask = _id => {
  return fetch(`http://localhost:4000/api/tasks/${_id}`)
    .then(res => res.json());
};

export const getProcesses = () => {
  return fetch('http://localhost:4000/api/processes')
      .then(res => res.json())
};

export const getTaskFeedbacks = _id => {
  return fetch(
    authAxios.get(`/task/${_id}/feedbacks`))
    .then(res => res.json())
    .then(json => json.results);
};

export const getUsers = () => {
  return fetch('http://localhost:4000/api/users')
      .then(res => res.json())
};

export const getUser = _id => {
  return fetch(`http://localhost:4000/api/users/${_id}`)
    .then(res => res.json());
};