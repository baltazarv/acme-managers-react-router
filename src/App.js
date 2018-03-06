import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router } from 'react-router-dom';
import Nav from './Nav';
// import Employees from './Employees';

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
      // console.log(managers);
      this.setState({ managers, employees });
    });
  }

  render() {
    console.log(this.state);
    // const { employees } = this.state;
    return (
      <Router>
        <Nav />
      </Router>
    );
  }
}

// const App = (props) => {
//   return (
//     <div>
//     <Nav />
//     <Employees />
//     </div>
//   );
// };

export default App;

