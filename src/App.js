import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Home from './pages/Home';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default App;
