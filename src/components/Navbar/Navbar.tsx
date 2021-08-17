import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import menu from '../../defaultData/Icon/menu-icon.png'
import friends from '../../defaultData/Icon/FriendsIcon.png'
import message from '../../defaultData/Icon/MessagesIcon.png'
import profile from '../../defaultData/Icon/ProfileIcon.png'
import users from '../../defaultData/Icon/usersIcons.png'

const Navbar = () => {
    return (
        <div >
            <div>
                <img className={s.mainNavIcon} src={menu} alt=""/>
                <span className={s.menuButton}>Menu</span>
            </div>
            <ul>
                <li className={s.LiItem}><img className={s.navIcon} src={profile} alt=""/><NavLink activeClassName={s.active} className={s.item} to="/profile">Profile</NavLink> </li>
                <li className={s.LiItem}><img className={s.navIcon} src={message} alt=""/><NavLink activeClassName={s.active} className={s.item} to="/messages">Messages</NavLink>  </li>
                <li className={s.LiItem}><img className={s.navIcon} src={users} alt=""/><NavLink activeClassName={s.active} className={s.item} to="/users">Users</NavLink></li>
                <li className={s.LiItem}><img className={s.navIcon} src={friends} alt=""/><NavLink activeClassName={s.active} className={s.item} to="/friends">Friends</NavLink></li>
            </ul>
        </div>
    );
}

export default Navbar;
