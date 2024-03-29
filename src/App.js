import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect, HashRouter } from "react-router-dom";

import routes from './router/config';

function App() {
  return (
    <div>
      {
        routes.map((route) => 
          <Route path={route.path} component={route.component} key={route.path}/>
        )
      }        
    </div>
  );
}

export default App;
