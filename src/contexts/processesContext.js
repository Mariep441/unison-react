import React, { useState, useEffect, createContext } from "react";
import { getProcesses } from "../api/unison-server-api";

export const ProcessesContext = createContext(null)

const ProcessesContextProvider = props => {
    const [processes, setProcesses] = useState([{ _id: "0", name: "Process Name" }]);
    useEffect(() => {
      getProcesses().then(allProcesses => {
        setProcesses([processes[0], ...allProcesses]);
      });
    }, []);

    return (
        <ProcessesContext.Provider value={{processes}}>
          {props.children}
        </ProcessesContext.Provider>    
    )
}

export default ProcessesContextProvider;