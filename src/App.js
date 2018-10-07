import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Homepage from './view/Homepage';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default hot(module)(App);
