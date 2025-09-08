
import React from 'react';
import { NavLink } from 'react-router-dom';
import './dashboard-side.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul className='sidebar-nav'>
          <li>
            <NavLink to="/admin" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Home</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
