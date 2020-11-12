import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Introduction from '../pages/introduction';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/introduction" component={Introduction} />
    </Switch>
  )
}