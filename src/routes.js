import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './components/Main';
import Home from './components/Home';
import Navigator from './components/Navigator';
import ProfilesList from './containers/ProfilesIndex';
import ProfileNew from './components/ProfileNew';
import ProfileShow from './containers/ProfileEach';

export default (
<Route path="/" component={Main}>

  <IndexRoute component={ProfilesList} />
  <Route path="profiles/new" component={ProfileNew} />
  <Route path="profiles/:id" component={ProfileShow} />
</Route>
);
