import * as React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";

import { RegisterPage } from "./pages/RegisterPage";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/dashboard" component={DashboardPage} />

          <Route>
            <Redirect to="/register" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
