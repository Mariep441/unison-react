
const token = localStorage.getItem('token');

export const getTasks = () => {
  return fetch(`https://maracuyatech.com/api/tasks`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
    .then(res => res.json());
};

export const getProgresses = () => {
  return fetch(`https://maracuyatech.com/api/progress`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
    .then(res => res.json());
};


export const getTask = _id => {
  return fetch(`https://maracuyatech.com/api/tasks/${_id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
    .then(res => res.json());
};


export const getTasksByProcess = (_id) => {
  return fetch(`https://maracuyatech.com/api/processes/${_id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
    .then(res => res.json());
};


export const deleteTask = _id => {
  return fetch(`https://maracuyatech.com/api/tasks/${_id}` , {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
    .then(res => res.json());
};


export const getProcesses = () => {
  return fetch('https://maracuyatech.com/api/processes', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
      .then(res => res.json())
};

export const getFeedbacks = () => {
  return fetch('https://maracuyatech.com/api/feedbacks', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
      .then(res => res.json())
};

export const getTaskFeedbacks = _id => {
  return fetch(`https://maracuyatech.com/api/tasks/${_id}/feedbacks`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
      .then(res => res.json())

};

export const deleteFeedback = _id => {
  return fetch(`https://maracuyatech.com/api/feedbacks/${_id}` , {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
    .then(res => res.json());
};


export const getUsers = () => {
  return fetch(`https://maracuyatech.com/api/users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token} `,
    }
  })
    .then(res => res.json());
};



export const getUser = _id => {
  return fetch(`https://maracuyatech.com/api/users/${_id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
    .then(res => res.json());
};


export const getUserbyEmail = email => {
  return fetch(`https://maracuyatech.com/api/users/${email}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
    .then(res => res.json());
};


