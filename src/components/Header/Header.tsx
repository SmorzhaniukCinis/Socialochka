import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";


type props = {
    login: string | null
    logoutUser: () => void
    avatar: string
}

const Header: React.FC<props> = (props) => {
    return (
        <div className={s.headerBlock}>
            <div>
                <img src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png" alt="Logo" className={s.logo}/>
            </div>
            <div>
                {!props.login
                    ? <NavLink to={'/login'} className={s.loginButton}>Login</NavLink>
                    : <div>

                        <NavLink to={'/profile'} className={s.UserProfile}>
                            <img className={s.profileAvatar} src={props.avatar} alt="avatar"/> {props.login}
                        </NavLink>
                        <button className={s.logoutButton} onClick={props.logoutUser}>Log out</button>
                    </div>
                }
            </div>
        </div>
    );
}

export default Header;