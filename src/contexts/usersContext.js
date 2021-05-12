import React, { useState, useEffect, createContext, useContext } from "react";
import { getUsers } from "../api/unison-server-api";
import { AuthContext } from '../contexts/authContext';

export const UsersContext = createContext(null)


const UsersContextProvider = props => {

  const authContext = useContext(AuthContext);


    const [users, setUsers] = useState([{ _id: "0", name: "All" }]);
    useEffect(() => {
      if (authContext.isAuthenticated === true) {
      getUsers().then(allUsers => {
        setUsers([users[0], ...allUsers]);
      });
    }}, [authContext.isAuthenticated]);



    return (
        <UsersContext.Provider 
          value={{users}}>
          {props.children}
        </UsersContext.Provider>    
    )
}

export default UsersContextProvider;