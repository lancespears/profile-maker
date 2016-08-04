import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Navigator from './components/Navigator';
import Dashboard from './components/Dashboard';
import Update from './components/Update';



export default (

<Route component={App}>
  <IndexRoute component={Dashboard} />
    <Route path="/" component={Dashboard} />
    <Route path="/update" component={Update} />
</Route>
);
