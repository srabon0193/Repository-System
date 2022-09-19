import React, { useState, useCallback } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Users from "./user/pages/users";
import NewPublication from "./publication/pages/NewPublication";
import UserPublications from "./publication/pages/userPublications";
import UpdatePublication from "./publication/pages/UpdatePublication";
import Auth from "./user/pages/Auth";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import { AuthContext } from "./shared/context/auth-context";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;
  if(isLoggedIn) {
    routes=(
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/publications" exact>
          <UserPublications />
        </Route>
        <Route path="/publications/new" exact>
          <NewPublication />
        </Route>
        <Route path="/publications/:publicationId">
          <UpdatePublication />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes=(
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/publications" exact>
          <UserPublications />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout}}
    >
      <Router>
        <MainNavigation />
        <main>
          {routes}
        </main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
