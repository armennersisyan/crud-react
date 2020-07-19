import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignUp from '../../views/SignUp';
import SignIn from '../../views/SignIn';
import Home from '../../views/Home';
import Topics from '../../views/Topics';
import Projects from '../../views/Projects';

function Routes() {
  return (
    <Switch>
      <Route path="/sign-up" component={SignUp} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/home" component={Home} isPrivate />
      <Route path="/topics" component={Topics} isPrivate />
      <Route path="/projects" component={Projects} isPrivate />
      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={SignUp} />
    </Switch>
  );
}

export default Routes;
