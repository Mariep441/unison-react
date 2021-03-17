import React, { useContext, useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/authContext' 

// components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Preloader from "../components/Preloader";

export const PrivateRoute = props => {
  const { component: Component, ...rest} = props;
  const [loaded, setLoaded] = useState(false);
  const context = useContext(AuthContext)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);


  return context.isAuthenticated === true ? (
    <Route {...rest} render={props => (
      <>
        <Preloader show={loaded ? false : true} />
        <Sidebar />

        <main className="content">
          <Navbar />
          <Component {...props} />
        </main>
      </>
    )}
    /> 
  ) : (

    <Redirect to={{pathname: "/signin", state: {from: props.location} }}/>
  );
};


