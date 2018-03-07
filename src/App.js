import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import Employees from './Employees';

class App extends Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      managers: []
    };
  }

  componentDidMount() {
    axios.get('/api/employees')
    .then(result => result.data)
    .then(employees => {
      const managerMap = employees.reduce((memo, employee) => {
        if (employee.manager) {
          memo[employee.manager.id] = employee.manager;
        }
        return memo;
      }, {});
      const managers = Object.keys(managerMap).map( key => managerMap[key] )
      this.setState({ managers, employees });
    });
  }

  render() {
    const { employees, managers } = this.state;
    return (
      <Router>
        <div>
          <Route render={(props) => {
            console.log('router goodies', props);
            return <hr />;
          }} />
          <Route render={ ({ location }) => <Nav employeeCount={ employees.length } managerCount={ managers.length } path={location.pathname} /> } />
          <Route path="/" exact render={ () => <Employees employees={ employees } /> } />
          <Route path="/managers" exact render={ () => <Employees employees={ managers } /> } />
        </div>
      </Router>
    );
  }
}

export default App;

