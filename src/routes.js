import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './components/Main';
import Navigator from './components/Navigator';
import Home from './components/Home';
import Update from './components/Update';



export default (

<Route component={Main}>
  <IndexRoute component={Home} />
    <Route path="/" component={Home} />
    <Route path="/update" component={Update} />

</Route>
);
