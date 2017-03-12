import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import App from './App.js';
import Dashboard from './Dashboard.js';

const Routes = (props) => (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/dashboard" component={Dashboard} />
  </Router>
);

export default Routes;