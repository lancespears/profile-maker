import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Navigator from './components/Navigator';
import ProfilesList from './containers/ProfilesIndex';
import ProfileNew from './components/ProfileNew';
import Dashboard from './containers/ProfileEach';

export default (
<Route component={App}>
  <IndexRoute component={Home} />
  <Route path="/" component={Home} />

  <IndexRoute component={ProfilesList} />
  <Route path="profiles/new" component={ProfileNew} />
  <Route path="profiles/:id" component={Dashboard} />
</Route>
);
