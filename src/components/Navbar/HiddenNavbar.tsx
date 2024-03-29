import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import menu from '../../defaultData/Icon/menu-icon.png'
import friends from '../../defaultData/Icon/FriendsIcon.png'
import message from '../../defaultData/Icon/MessagesIcon.png'
import profile from '../../defaultData/Icon/ProfileIcon.png'
import users from '../../defaultData/Icon/usersIcons.png'
import {useDispatch} from "react-redux";
import {AppActions} from "../../redux/App-reducer";


const chatLink = 'https://media.istockphoto.com/vectors/black-and-white-chat-icon-speech-bobbles-flat-art-symbol-vector-vector-id1221061155?b=1&k=20&m=1221061155&s=170667a&w=0&h=Nyo7I8gHVjIr1QH6X_8XZKwkJtdqfZid66AOY0m7oQs='

const HiddenNavbar:React.FC = () => {

    const dispatch = useDispatch()


    return (
        <div className={s.smallContainer}>
            <div  className={s.menuButtonBlock}>
                <img onClick={() => dispatch(AppActions.setPopupMenu(true))} className={s.mainNavIcon} src={menu} alt=""/>
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
                <li className={s.LiItem}>
                    <NavLink activeClassName={s.active} className={s.item} to="/chat">
                        <img className={s.navIcon}
                             src={chatLink}
                             alt=""/>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default HiddenNavbar;
