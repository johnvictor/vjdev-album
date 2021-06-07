import * as React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";

import { RegisterPage } from "./pages/RegisterPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/dashboard" component={DashboardPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route>
            <Redirect to="/login" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
