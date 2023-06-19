import React from 'react';
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom';
import DialogItem from "../Dialogs/DialogItem/DialogItem";

const Navbar = (props) => {

    let navbarFriends = props.state.sitebar
        .map( d => <div>{d.name}</div>)

    return (
    <nav className={s.nav}>
      <div>
        <NavLink to='/profile' className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
      </div>
      <div>
        <NavLink to='/dialogs' className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
      </div>
      <div>
        <NavLink to='/news' className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
      </div>
      <div>
        <NavLink to='/music' className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
      </div>
      <div>
        <NavLink to='/settings' className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink>
      </div>
      <div>
          <h3>Friends</h3>
          <div className={s.friends}>
              {navbarFriends}
          </div>
      </div>
    </nav>
  )
}

export default Navbar;