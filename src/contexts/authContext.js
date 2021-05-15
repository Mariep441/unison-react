import React, { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [authToken, setAuthToken] = useState();
 

    const signin = (user) => {

      if (localStorage.getItem('token') !== null ) {
          setIsAuthenticated(true);
      }
      else {
      fetch('https://maracuyatech.com/api/users/authenticate', { 
        method: 'POST', 
        body: JSON.stringify (user),
        headers: { 'Content-Type': 'application/json' },
      })
        .then(res => res.json()) 
        .then(res =>  
          {
          if (res.success === true) {
            setIsAuthenticated(true);
            setAuthToken(res.token);
            localStorage.setItem('token', res.token);
            localStorage.setItem('email', user.email);
            window.location.reload(true); 
        } 
      })
    }
  };

 
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authToken,
        signin
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;