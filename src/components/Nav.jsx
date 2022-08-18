import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import style from './Nav.module.css';

const LINKS = [
  { to: '/', text: 'BOOKS' },
  { to: '/categories', text: 'CATEGORIES' },
];

const Nav = () => (
  <div className={style.navflex}>
    <h1>Bookstore CMS</h1>
    <ul className={style.navlinks}>
      {LINKS.map((link) => (
        <li key={link.to}>
          <NavLink to={link.to} className={style.anchor}>{link.text}</NavLink>
        </li>
      ))}
    </ul>
    <div className={style.user}>
      <BsPersonCircle />
    </div>
  </div>
);

export default Nav;
