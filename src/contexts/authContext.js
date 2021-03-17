import React, {  createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isError, setIsError] = useState(false);
    const setAuthTokens = useState();
    
    const authenticate = (user) => {
      fetch('http://localhost:4000/api/users/authenticate', { 
        method: 'POST', 
        body: JSON.stringify (user),
        headers: { 'Content-Type': 'application/json' },
      })
        .then(res => {
          if (res.status = 201) {
          setAuthTokens(res.token)
          setIsAuthenticated(true);
        } else {
          setIsError(true);
        }
      }).catch(e => {setIsError(true);});
    }

    const signout = () => {

    }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isError,
        setAuthTokens,
        authenticate,
        signout
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;