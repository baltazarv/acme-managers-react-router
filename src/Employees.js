import React from 'react';
// import ReactDOM from 'react-dom';

const Employees = ({ employees }) => {
  return (
    <ul>
      { employees.map( employee => {
        return  (
          <li key={ employee.id }>
            { employee.name }
            {
              employee.manager ? (
                <span> ({ employee.manager.name })</span>
              ) : ( null )
            }
          </li>
        );
      })}
    </ul>
  );
};

export default Employees;
