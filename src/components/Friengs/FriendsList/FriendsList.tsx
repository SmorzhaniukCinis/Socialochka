import React from 'react'
import style from './FriendsList.module.css'
import {useHistory} from "react-router-dom";
import photo from '../../../defaultData/avatarDefoult.png'
import {friendsType} from "../../../Type/Types";

type props = {
    friends: friendsType
}


const FriendsList: React.FC<props> = (props) => {
    const history = useHistory()
    const goToUserProfile = (id:number) => {
        history.push(
            {
                pathname: '/profile',
                search: `?id=${id}`
            }
        )
    }
    return (
            <div className={style.item} onClick={()=>goToUserProfile(props.friends.id as number)}>
                {/* @ts-ignore*/}
                <img src={props.friends.photos?.small || photo} alt=""/>
                <span >{props.friends.name}</span>
                <span >{props.friends.status}</span>
            </div>
    )
}
export default FriendsList