import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ResultsPanel from './../../components/ResultsPanel';
import Layout from './../Layout/Layout';

const Routes = () => (
  <Switch>
    <Route
      exact
      path="/"
      component={Layout}
    />
    <Route path="/filter" component={ResultsPanel} />
    <Route
      path="/reds/:id"
      component={Layout}
    />
    <Route
      path="/reds"
      component={Layout}
    />
    <Route
      path="/oranges/:id"
      component={Layout}
    />
    <Route
      path="/oranges"
      component={Layout}
    />
    <Route
      path="/yellows/:id"
      component={Layout}
    />
    <Route
      path="/yellows"
      component={Layout}
    />
    <Route
      path="/greens/:id"
      component={Layout}
    />
    <Route
      path="/greens"
      component={Layout}
    />
    <Route
      path="/blues/:id"
      component={Layout}
    />
    <Route
      path="/blues"
      component={Layout}
    />
    <Route
      path="/purples/:id"
      component={Layout}
    />
    <Route
      path="/purples"
      component={Layout}
    />
    <Route
      path="/pinks/:id"
      component={Layout}
    />
    <Route
      path="/pinks"
      component={Layout}
    />
  </Switch>
);

const R = () => (
  <Router>
    <Route component={Routes} />
  </Router>
);

export default R;
