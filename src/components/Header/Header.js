import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={s.headerBlock}>
            <img src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png" alt="Logo" className={s.logo}/>
            <div>
                {!props.login
                    ?<NavLink to={'/login'} className={s.loginButton} >Login</NavLink>
                    :<NavLink to={'/profile'} className={s.loginButton}> {props.login}</NavLink>}
            </div>
        </div>
    );
}

export default Header;