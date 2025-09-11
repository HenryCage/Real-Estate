
import React from 'react';
import { NavLink } from 'react-router-dom';
import './dashboard-side.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul className='sidebar-nav'>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/admin" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/admin/add-posts" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Add Posts</NavLink>
          </li>
          <li>
            <NavLink to="/admin/view-posts" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>View Posts</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
