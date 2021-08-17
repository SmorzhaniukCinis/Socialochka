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

const HiddenNavbar:React.FC<props> = (props) => {
    return (
        <div>
            <div  className={s.menuButtonBlock}>
                <img onClick={() => props.setPopupMenu(true)} className={s.mainNavIcon} src={menu} alt=""/>
            </div>
            <ul>
                <li className={s.LiItem}>
                    <NavLink activeClassName={s.active} className={s.item} to="/profile">
                        <img className={s.navIcon}
                             src={profile}
                             alt=""/>
                    </NavLink>
                </li>
                <li className={s.LiItem}>
                    <NavLink activeClassName={s.active} className={s.item} to="/messages">
                        <img className={s.navIcon}
                             src={message}
                             alt=""/>
                    </NavLink>
                </li>
                <li className={s.LiItem}>
                    <NavLink activeClassName={s.active} className={s.item} to="/users">
                        <img className={s.navIcon} src={users}
                             alt=""/>
                    </NavLink>
                </li>
                <li className={s.LiItem}>
                    <NavLink activeClassName={s.active} className={s.item} to="/friends">
                        <img className={s.navIcon}
                             src={friends}
                             alt=""/>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default HiddenNavbar;
