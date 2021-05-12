import React, { useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch} from "react-router-dom";
import { Routes } from "./router/AppRouter";
import { PublicRoute } from "./router/PublicRoute";
import { PrivateRoute } from "./router/PrivateRoute";


//contexts
import TasksContextProvider from "./contexts/tasksContext";
import ProcessesContextProvider from "./contexts/processesContext";
import UsersContextProvider from "./contexts/usersContext";
import AuthContextProvider from "./contexts/authContext";
import FeedbacksContextProvider from "./contexts/feedbacksContext";


// pages
import Presentation from "./pages/Presentation";
import Dashboard from "./pages/DashboardPage";
import Tasks from "./pages/TasksListPage";
import NewTask from "./pages/NewTaskPage";
import NewProcess from "./pages/NewProcessPage";
import Kanban from "./pages/TaskKanbanPage";
import Gantt from "./pages/TaskGanttPage";
import Checklists from "./pages/ChecklistsPage";
import Settings from "./pages/Settings";
import Signin from "./pages/publicPages/Signin";
import Signup from "./pages/publicPages/Signup";
import ForgotPassword from "./pages/publicPages/ForgotPassword";
import ResetPassword from "./pages/publicPages/ResetPassword";
import NotFoundPage from "./pages/publicPages/NotFound";
import ServerError from "./pages/publicPages/ServerError";
import TaskDetails from './pages/TaskDetailsPage';
import AlertTasks from './pages/AlertTasksPage';
import Feedbacks from "./pages/FeedbacksPage";
import TaskFeedback from "./pages/TaskFeedbackPage";
import AddTaskFeedback from './pages/addTaskFeedbackPage'

// core styles
import "./scss/volt.scss";

// vendor styles
import "@fortawesome/fontawesome-free/css/all.css";
import "react-datetime/css/react-datetime.css";


function App(props)  {
  const [authToken, setAuthToken] = useState();

  const setToken = (data) => {
    localStorage.getItem("token", JSON.stringify(data));
    setAuthToken(data);
  }

  return (
    <BrowserRouter>
      < AuthContextProvider value={{ authToken, setAuthToken: setToken }}>  

      <div className="container-fluid">
        <PublicRoute exact path={Routes.Presentation.path} component={Presentation} />
        <PublicRoute exact path={Routes.Signin.path} component={Signin} />
        <PublicRoute exact path={Routes.Signup.path} component={Signup} />
        <PublicRoute exact path={Routes.ForgotPassword.path} component={ForgotPassword} />
        <PublicRoute exact path={Routes.ResetPassword.path} component={ResetPassword} />
        <PublicRoute exact path={Routes.NotFound.path} component={NotFoundPage} />
        <PublicRoute exact path={Routes.ServerError.path} component={ServerError} />
      </div>

      <div className="container-fluid">
        
        < UsersContextProvider> 
        < ProcessesContextProvider> 
        < FeedbacksContextProvider> 
        < TasksContextProvider>
              <Switch>
                <PrivateRoute exact path={Routes.Dashboard.path} component={Dashboard} />
                <PrivateRoute exact path={Routes.NewTask.path} component={NewTask} />
                <PrivateRoute exact path={Routes.NewProcess.path} component={NewProcess} />
                <PrivateRoute exact path={Routes.Tasks.path} component={Tasks} />
                <PrivateRoute exact path={Routes.Kanban.path} component={Kanban} />
                <PrivateRoute exact path={Routes.Gantt.path} component={Gantt} />
                <PrivateRoute exact path={Routes.Checklists.path} component={Checklists} />
                <PrivateRoute exact path={Routes.Settings.path} component={Settings} />
                <PrivateRoute exact path={Routes.AddTaskFeedback.path} component={AddTaskFeedback} />
                <PrivateRoute exact path={Routes.Feedbacks.path} component={Feedbacks} />
                <PrivateRoute path={Routes.TaskFeedback.path} component={TaskFeedback} />
                <PrivateRoute exact path={Routes.AlertTasks.path} component={AlertTasks} />
                <PrivateRoute path={Routes.TaskDetails.path} component={TaskDetails} />
              </Switch>
        </TasksContextProvider>
        </FeedbacksContextProvider>
        </ProcessesContextProvider>
        </UsersContextProvider>

      </div>
      </AuthContextProvider>  
  </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));