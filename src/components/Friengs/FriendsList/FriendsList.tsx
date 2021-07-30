import React from 'react'
import style from './FriendsList.module.css'
import {NavLink} from "react-router-dom";
import photo from '../../../defaultData/avatarDefoult.png'
import {friendsType} from "../../../Type/Type";

type props = {
    friends: friendsType
}

const FriendsList: React.FC<props> = (props) => {
    return (
        <NavLink className={style.container} to={"/profile/" + props.friends.id}>
            <div className={style.item}>
                {/* @ts-ignore*/}
                <img src={props.friends.photos?.small || photo} alt=""/>
                <span >{props.friends.name}</span>
                <span >{props.friends.status}</span>
            </div>
        </NavLink>
    )
}
export default FriendsList