import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={style.nav}>
<div className={style.item}>
  
      
        <div >
          <NavLink to='/profile' activeClassName={style.active}>Profile</NavLink>
        </div>
        <div >
          <NavLink to='/dialogs' activeClassName={style.active}>Messages</NavLink>
        </div>
        <div >
          <NavLink to ='/users' activeClassName={style.active}>Users</NavLink>
        </div>

        <div >
          <NavLink to = '/news' activeClassName={style.active}>News</NavLink>
        </div>
        <div >
          <NavLink to = '/music' activeClassName={style.active}>Music </NavLink>
        </div>
</div>
      
    </nav>
      
  )
}
export default Navbar