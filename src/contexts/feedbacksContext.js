import React, { useEffect, createContext, useReducer, useContext} from "react";
import { getFeedbacks } from "../api/unison-server-api";
import { AuthContext } from '../contexts/authContext';

export const FeedbacksContext = createContext(null);
  

const reducer = (state, action) => {
  switch (action.type) {

    case "load-feedbacks":
      return { feedbacks: [...action.payload.feedbacks] };
      
    default:
      return state;
  }
};



const FeedbacksContextProvider = (props) => {

  const authContext = useContext(AuthContext);
  const [state, dispatch] = useReducer(reducer, { feedbacks: [] });



  useEffect(() => {
    if (authContext.isAuthenticated === true) {
    getFeedbacks().then((feedbacks) => {
      dispatch({ type: "load-feedbacks", payload: { feedbacks } });
    });
  }}, [authContext.isAuthenticated]);


  
  return (
    <FeedbacksContext.Provider
      value={{
        feedbacks: state.feedbacks,

      }}
    >
      {props.children}
    </FeedbacksContext.Provider>
  );
};

export default FeedbacksContextProvider;