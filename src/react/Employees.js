import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Employees extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: []
    };
  }

  componentDidMount() {
    axios.get('/api/employees')
    .then(res => res.data)
    .then(employees => {
      this.setState({ employees });
    });
  }

  render() {
    const { employees } = this.state;
    return (
      <div>
        <h2>Employees</h2>
        <ul>
          {
            employees.map( employee => (
            <li key={ employee.id }>{ employee.name }</li>
          ))
          }
        </ul>
      </div>
    );
  }
}
