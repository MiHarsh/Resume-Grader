import React from "react";
import Register from "./userAuth/Register";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./userAuth/Login";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import ForgotPassword from "./userAuth/ForgotPassword";
import UpdateProfile from "./userAuth/UpdateProfile";
import Home from "./Home";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <PublicRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />

            <PrivateRoute
              exact
              path="/update-profile"
              component={UpdateProfile}
            />
            <PublicRoute exact path="/register" component={Register} />
            <PublicRoute exact path="/login" component={Login} />
            <PublicRoute
              exact
              path="/forgot-password"
              component={ForgotPassword}
            />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
