import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import avatarDefault from '../../defaultData/avatarDefoult.png'
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../../redux/Auth-reducer";
import {getLogin, getUserPhoto} from "../../redux/Selectors/AuthSelectors";



export const Header: React.FC = () => {
    const dispatch = useDispatch()
    const login = useSelector(getLogin)
    const avatar = useSelector(getUserPhoto)


    return (
        <div className={s.headerBlock_wrapper}>
            <div className={s.headerBlock}>
                <div>
                    <img src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png" alt="Logo" className={s.logo}/>
                </div>
                <div>
                    {!login
                        ? <NavLink to={'/login'} className={s.loginButton}>Login</NavLink>
                        : <div>

                            <NavLink to={'/profile'} className={s.UserProfile}>
                                <img className={s.profileAvatar} src={avatar || avatarDefault} alt="avatar"/> {login}
                            </NavLink>
                            <button className={s.logoutButton} onClick={()=>dispatch(logoutUser)}>Log out</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}
