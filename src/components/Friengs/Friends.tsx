import React from 'react'
import style from './Friends.module.css'
import FriendsList from './FriendsList/FriendsList'
import {friendsType} from "../../Type/Types";
import SearchField from "../Users/SeatchField/SearchField";

type props = {
    friends: Array<friendsType>
    searchFiends: (userName:string) => void
}

const Friends: React.FC<props> = (props) => {
    // @ts-ignore
    let YourFriends = props.friends.map( users => <FriendsList className={style.item} friends={users}/> )

    return (
        <div>
            <h5 className={style.blockName}>Your friends <SearchField searchUsers={props.searchFiends}/></h5>

            <div className={style.BlockItem}>{YourFriends}</div>
        </div>
    )
}

export default Friends