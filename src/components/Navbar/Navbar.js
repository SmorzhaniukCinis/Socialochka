import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div >
            <ul>
                <li className={s.LiItem}><NavLink activeClassName={s.active} className={s.item} to="/profile">Profile</NavLink> </li>
                <li className={s.LiItem}><NavLink activeClassName={s.active} className={s.item} to="/messages">Messages</NavLink>  </li>
                <li className={s.LiItem}><NavLink activeClassName={s.active} className={s.item} to="/users">Users</NavLink></li>
                <li className={s.LiItem}><NavLink activeClassName={s.active} className={s.item} to="/friends">Friends</NavLink></li>
            </ul>
        </div>
    );
}

export default Navbar;
