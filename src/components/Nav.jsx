import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Nav.module.css';

const LINKS = [
  { to: '/', text: 'BOOKS' },
  { to: '/categories', text: 'CATEGORIES' },
];

const Nav = () => (
  <div className={style.navflex}>
    <h1>Bookstore CMS</h1>
    <ul>
      {LINKS.map((link) => (
        <li key={link.to}>
          <NavLink to={link.to}>{link.text}</NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default Nav;
