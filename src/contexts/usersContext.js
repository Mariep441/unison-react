import React, { useState, useEffect, createContext } from "react";
import { getUsers } from "../api/unison-server-api";

export const UsersContext = createContext(null)

const UsersContextProvider = props => {
    const [users, setUsers] = useState([{ _id: "0", name: "User Name" }]);
    useEffect(() => {
      getUsers().then(allUsers => {
        setUsers([users[0], ...allUsers]);
      });
    }, []);

    return (
        <UsersContext.Provider value={{users}}>
          {props.children}
        </UsersContext.Provider>    
    )
}

export default UsersContextProvider;