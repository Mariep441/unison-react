import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

export const PublicRoute = ({isAuthenticated, component: Component,...rest}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route {...rest} component={props => 
      isAuthenticated ? <Redirect to="/" /> : <Component {...props} />
    }
  />
  );
};

