import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import menu from '../../defaultData/Icon/menu-icon.png'
import friends from '../../defaultData/Icon/FriendsIcon.png'
import message from '../../defaultData/Icon/MessagesIcon.png'
import profile from '../../defaultData/Icon/ProfileIcon.png'
import users from '../../defaultData/Icon/usersIcons.png'

type props = {
    setPopupMenu: (isPopup:boolean) => void
}
const FullNavbar:React.FC<props> = (props) => {
    return (
        <div>
            <div onClick={()=>props.setPopupMenu(false)} className={s.menuButtonBlock}>
                <img className={s.mainNavIcon} src={menu} alt=""/>
                <span  className={s.menuButton}>Menu</span>
            </div>
            <ul>
                <li className={s.LiItem}>
                    <NavLink activeClassName={s.active} className={s.item} to="/profile">
                        <img className={s.navIcon}
                             src={profile}
                             alt=""/>
                        <span className={s.itemText}>Profile</span>
                    </NavLink>
                </li>
                <li className={s.LiItem}>
                    <NavLink activeClassName={s.active} className={s.item} to="/messages">
                        <img className={s.navIcon}
                             src={message}
                             alt=""/>
                        <span className={s.itemText}>Messages</span>
                    </NavLink>
                </li>
                <li className={s.LiItem}>
                    <NavLink activeClassName={s.active} className={s.item} to="/users">
                        <img className={s.navIcon} src={users}
                             alt=""/>
                        <span className={s.itemText}>Users</span>
                    </NavLink>
                </li>
                <li className={s.LiItem}>
                    <NavLink activeClassName={s.active} className={s.item} to="/friends">
                        <img className={s.navIcon}
                             src={friends}
                             alt=""/>
                        <span className={s.itemText}>Friends</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default FullNavbar;