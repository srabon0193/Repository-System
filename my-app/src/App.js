import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route , Redirect , Switch} from 'react-router-dom';


import Users from './user/pages/users';
import NewPublication from './publication/pages/NewPublication';
import UserPublications from './publication/pages/userPublications';
import UpdatePublication from './publication/pages/UpdatePublication';
import MainNavigation from './shared/components/Navigation/MainNavigation';
const App =() =>{
  return (
    <Router>
      <MainNavigation />
      <main>
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
            <UpdatePublication/>
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
