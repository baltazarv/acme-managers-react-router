import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ employees, managers, path }) => (
    <ul>
      <li>
        <Link to="/">Employees</Link>
      </li>
      <li>
        <Link to="/managers">Managers</Link>
      </li>
    </ul>
);

export default Nav;
