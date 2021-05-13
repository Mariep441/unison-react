
const token = localStorage.getItem('token');

export const getTasks = () => {
  return fetch(`http://maracuyatech.com:4000/api/tasks`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
    .then(res => res.json());
};

export const getProgresses = () => {
  return fetch(`http://maracuyatech.com:4000/api/progress`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
    .then(res => res.json());
};


export const getTask = _id => {
  return fetch(`http://maracuyatech.com:4000/api/tasks/${_id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
    .then(res => res.json());
};


export const getTasksByProcess = (_id) => {
  return fetch(`http://maracuyatech.com:4000/api/processes/${_id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
    .then(res => res.json());
};


export const deleteTask = _id => {
  return fetch(`http://maracuyatech.com:4000/api/tasks/${_id}` , {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
    .then(res => res.json());
};


export const getProcesses = () => {
  return fetch('http://maracuyatech.com:4000/api/processes', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
      .then(res => res.json())
};

export const getFeedbacks = () => {
  return fetch('http://maracuyatech.com:4000/api/feedbacks', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
      .then(res => res.json())
};

export const getTaskFeedbacks = _id => {
  return fetch(`http://maracuyatech.com:4000/api/tasks/${_id}/feedbacks`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
      .then(res => res.json())

};

export const deleteFeedback = _id => {
  return fetch(`http://maracuyatech.com:4000/api/feedbacks/${_id}` , {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
    .then(res => res.json());
};


export const getUsers = () => {
  return fetch(`http://maracuyatech.com:4000/api/users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token} `,
    }
  })
    .then(res => res.json());
};



export const getUser = _id => {
  return fetch(`http://maracuyatech.com:4000/api/users/${_id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
    .then(res => res.json());
};


export const getUserbyEmail = email => {
  return fetch(`http://maracuyatech.com:4000/api/users/${email}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
    .then(res => res.json());
};


