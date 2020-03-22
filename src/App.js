import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignIn from "./components/auth/SignIn";
import Projects from "./components/projects/Projects";
import SignUp from "./components/auth/SignUp";
import Private from "./routes/private";

import ProjectState  from './context/projects/ProjectState';
import TaskState from "./context/tasks/TaskState";
import AlertState from "./context/alerts/AlertState";
import AuthState from "./context/auth/AuthState";
import auth from "./middlewares/auth";

// Check if exists token
const token = localStorage.getItem('token');
if (token) {
  auth(token)
}

function App() {
  return (
    <ProjectState>
      <TaskState>
        <AlertState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={SignIn} />
                <Route exact path="/sign-up" component={SignUp} />
                <Private exact path="/projects" component={Projects} />
              </Switch>
            </Router>
          </AuthState>
        </AlertState>
      </TaskState>
    </ProjectState>
  );
}

export default App;
