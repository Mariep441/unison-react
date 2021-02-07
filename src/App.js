
import React, {useState, useCallback } from 'react';
import axios from 'axios';
import './App.css';

//

const accessToken ='secretpasswordnotrevealedtoanyone';
const apiUrl = 'http://localhost:4000/api';

const authAxios = axios.create ({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

function App() {

  const [users, setUsers] = useState([]);
  const [requestError, setRequestError] = useState();

  const fetchData = useCallback(async () => {
    try {
      const result = await authAxios.get(`/users`);
      setUsers(result.data);
    }
    catch (err) {
      setRequestError(err.message)
    }

  })

  return (
    <div className="App">
      <button onClick={() => fetchData()}>Get Users</button>
        
        {users.map(user => {
          return <p key={user.firstName}>{user.firstName}</p>;
        })}
        {requestError }
        </div>
  );
}

export default App;
