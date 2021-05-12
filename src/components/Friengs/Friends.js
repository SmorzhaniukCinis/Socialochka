import React from 'react'
import style from './Friends.module.css'
import FriendsList from './FriendsList/FriendsList'

const Friends = (props) => {
    let YourFriends = props.friends.map( users => <FriendsList className={style.item} id={users.id} users={users.name} photo={users.photo}/> )
debugger
    return (
        <div>
            <h5 className={style.blockName}>Your friends</h5>
            <div className={style.BlockItem}>{YourFriends}</div>
        </div>
    )
}

export default Friends