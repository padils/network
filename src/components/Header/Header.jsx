import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  
  return (
    <header className={s.header}>


      <span>
        <NavLink to='/profile'>
          <img src='https://i.pinimg.com/originals/97/d6/a8/97d6a844e644e97abd1a96bc1c88e426.jpg' />
          PADILS network 
        </NavLink>
      </span>
      
      <div className={s.login} >
      {!props.Auth.isAuth?
        <NavLink to='/login'>
          login
         </NavLink>:
        <div>
           <div>{props.Auth.login}</div>
           <button onClick={props.Log_out} >Logout</button>
        </div>
      }
      </div>
     

    </header>)
}
export default Header