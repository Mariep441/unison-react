import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import TasksContextProvider from "./contexts/tasksContext";
import ProcessesContextProvider from "./contexts/processesContext";


import HomePage from "./pages/HomePage";
import Kanban from "./pages/TaskKanbanPage";
import TaskDetailsPage from './pages/TaskDetailsPage';
import TasksListPage from './pages/TasksListPage';
import AlertTasksPage from './pages/AlertTasksPage';
import TaskFeedbackPage from "./pages/TaskFeedbackPage";
import AddTaskFeedbackPage from './pages/addTaskFeedbackPage'

// core styles
import "./scss/volt.scss";

// vendor styles
import "@fortawesome/fontawesome-free/css/all.css";
import "react-datetime/css/react-datetime.css";


const App = () => {
  return (
    <BrowserRouter>
      <div className="container-fluid">
      <TasksContextProvider>
      <  ProcessesContextProvider> 
          <Switch>
            <Route path="/feedbacks/:id" component={TaskFeedbackPage} />
            <Route path="/feedbacks/form" component={AddTaskFeedbackPage} />
            <Route path="/tasks/:id" component={TaskDetailsPage} />
            <Route path="/" component={HomePage} />
            <Redirect from="*" to="/" />
          </Switch>
        </ProcessesContextProvider>
      </TasksContextProvider>
      </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));