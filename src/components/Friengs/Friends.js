import React from 'react'
import style from './Friends.module.css'
import FriendsList from './FriendsList/FriendsList'

const Friends = (props) => {
debugger
    let YourFriends = props.friends.map( users => <FriendsList className={style.item} friends={users}/> )

    return (
        <div>
            <h5 className={style.blockName}>Your friends</h5>
            <div className={style.BlockItem}>{YourFriends}</div>
        </div>
    )
}

export default Friends