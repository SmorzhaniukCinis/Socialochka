import React from 'react'
import style from './FriendsList.module.css'
import {NavLink} from "react-router-dom";
import photo from '../../../defaultData/avatarDefoult.png'

const FriendsList = (props) => {
    return (
        <NavLink className={style.container} to={"/profile/" + props.friends.id}>
            <div className={style.item}>
                <img src={props.friends.photos?.small || photo} alt=""/>
                <span >{props.friends.name}</span>
                <span >{props.friends.status}</span>
            </div>
        </NavLink>
    )
}
export default FriendsList