import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect, HashRouter } from "react-router-dom";

import routes from './router/config';

function App() {
  return (
    <Router>
    <Switch>
      {
        routes.map((route) => 
          <Route path={route.path} component={route.component} key={route.path}/>
        )
      }
      {/* <Redirect to="/oneDetail"/>       */}
    </Switch>
    </Router>
  );
}

export default App;
