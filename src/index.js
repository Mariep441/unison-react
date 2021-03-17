import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import { Routes } from "./router/AppRouter";
import { PublicRoute } from "./router/PublicRoute";
import { PrivateRoute } from "./router/PrivateRoute";

//contexts
import TasksContextProvider from "./contexts/tasksContext";
import ProcessesContextProvider from "./contexts/processesContext";
import UsersContextProvider from "./contexts/usersContext";
import AuthContextProvider from "./contexts/authContext";


// pages
import Presentation from "./pages/Presentation";
import Dashboard from "./pages/DashboardPage";
import Tasks from "./pages/TasksListPage";
import NewTask from "./pages/NewTaskPage";
import Calendars from "./pages/CalendarsPage";
import Kanban from "./pages/TaskKanbanPage";
import Checklists from "./pages/ChecklistsPage";
import Settings from "./pages/Settings";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import NotFoundPage from "./pages/NotFound";
import ServerError from "./pages/ServerError";
import TaskDetails from './pages/TaskDetailsPage';
import AlertTasks from './pages/AlertTasksPage';
import TaskFeedback from "./pages/TaskFeedbackPage";
import AddTaskFeedback from './pages/addTaskFeedbackPage'


// components
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";


// core styles
import "./scss/volt.scss";

// vendor styles
import "@fortawesome/fontawesome-free/css/all.css";
import "react-datetime/css/react-datetime.css";



const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
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
  );
};



function App(props)  {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <BrowserRouter>
      <div className="container-fluid">
      < AuthContextProvider value={{ authTokens, setAuthTokens: setTokens }}>  
        < UsersContextProvider>  
          < TasksContextProvider>
            < ProcessesContextProvider> 
  
              <Switch>

                <PublicRoute exact path={Routes.Presentation.path} component={Presentation} />
                <PublicRoute exact path={Routes.Signin.path} component={Signin} />
                <PublicRoute exact path={Routes.Signup.path} component={Signup} />
                <PublicRoute exact path={Routes.ForgotPassword.path} component={ForgotPassword} />
                <PublicRoute exact path={Routes.ResetPassword.path} component={ResetPassword} />
                <PublicRoute exact path={Routes.NotFound.path} component={NotFoundPage} />
                <PublicRoute exact path={Routes.ServerError.path} component={ServerError} />


                <RouteWithSidebar exact path={Routes.Dashboard.path} component={Dashboard} />
                <RouteWithSidebar exact path={Routes.NewTask.path} component={NewTask} />
                <RouteWithSidebar exact path={Routes.Tasks.path} component={Tasks} />
                <RouteWithSidebar exact path={Routes.Calendars.path} component={Calendars} />
                <RouteWithSidebar exact path={Routes.Kanban.path} component={Kanban} />
                <RouteWithSidebar exact path={Routes.Checklists.path} component={Checklists} />
                <RouteWithSidebar exact path={Routes.Settings.path} component={Settings} />
                <RouteWithSidebar exact path={Routes.AddTaskFeedback.path} component={AddTaskFeedback} />
                <RouteWithSidebar exact path={Routes.TaskFeedback.path} component={TaskFeedback} />
                <RouteWithSidebar exact path={Routes.AlertTasks.path} component={AlertTasks} />
                <RouteWithSidebar exact path={Routes.TaskDetails.path} component={TaskDetails} />
      
                <Route path="/" component={Presentation} />

                <Redirect from="*" to="/" />

              </Switch>
            </ProcessesContextProvider>
          </TasksContextProvider>
        </UsersContextProvider>
      </AuthContextProvider>  
      </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));