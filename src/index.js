import React from 'react';
import ReactDOM from 'react-dom';
import Main from './react/Main';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import Employees from './react/Employees';

ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={ Main } />
    <Route path="/employees" component={ Employees } />
  </Router>,
  document.getElementById('app')
);
