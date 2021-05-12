import React, { useEffect, createContext, useReducer, useContext} from "react";
import { getTasks } from "../api/unison-server-api";
import { AuthContext } from '../contexts/authContext';

export const TasksContext = createContext(null);
  
const reducer = (state, action) => {
  switch (action.type) {

    case "add-alert":
      return {
        tasks: state.tasks.filter((t) => t._id !== action.payload.task._id),
        alerts: [...state.alerts, action.payload.task],
      };

    case "load-tasks":
      return { tasks: [...action.payload.tasks], alerts: [] };

      
    case "add-feedback":
      return {
        tasks: [...state.tasks],
        alerts: [
          ...state.alerts.filter((t) => t._id !== action.payload.task._id),
          { ...action.payload.task, feedback: action.payload.feedback },
        ],
      };
    default:
      return state;
  }
};



const TasksContextProvider = (props) => {

  const authContext = useContext(AuthContext);
  const [state, dispatch] = useReducer(reducer, { tasks: [], alerts: [] });


  const addToAlerts = (taskId) => {
    const index = state.tasks.map((t) => t._id).indexOf(taskId);
    dispatch({ type: "add-alert", payload: { task: state.tasks[index] } });
  };

  const addFeedback = (task, feedback) => {
    dispatch({ type: "add-feedback", payload: { task, feedback } });
  }; 

  useEffect(() => {
    if (authContext.isAuthenticated === true) {
    getTasks().then((tasks) => {
      dispatch({ type: "load-tasks", payload: { tasks } });
    });
  }}, [authContext.isAuthenticated]);



  
  return (
    <TasksContext.Provider
      value={{
        tasks: state.tasks,
        alerts: state.alerts,
        addToAlerts: addToAlerts,
        addFeedback: addFeedback,
      }}
    >
      {props.children}
    </TasksContext.Provider>
  );
};

export default TasksContextProvider;