import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
// import Welcome from './components/welcome';      // remove later

import Main from './containers/main';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
  </Route>
);
