import React, { useState, useEffect, createContext, useContext } from "react";
import { getProcesses } from "../api/unison-server-api";
import { AuthContext } from '../contexts/authContext';

export const ProcessesContext = createContext(null)

const ProcessesContextProvider = props => {

  const authContext = useContext(AuthContext);
  const [processes, setProcesses] = useState([{ _id: "0", name: "All" }]);


    useEffect(() => {
      if (authContext.isAuthenticated === true) {
      getProcesses().then(allProcesses => {
        setProcesses([processes[0], ...allProcesses]);
      });
    }}, [authContext.isAuthenticated]);



    return (
        <ProcessesContext.Provider value={{processes}}>
         {props.children}
        </ProcessesContext.Provider>    
    )
}

export default ProcessesContextProvider;