import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}><NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink></div>
        <div className={s.item}><NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink></div>
        <div className={s.item}><NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink></div>
        <div className={s.item}><NavLink to="/posts" activeClassName={s.activeLink}>Posts</NavLink></div>
      </nav>
    )
}

export default Navbar;