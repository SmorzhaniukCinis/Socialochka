import React, {useEffect} from 'react'
import style from './Friends.module.css'
import FriendsList from './FriendsList/FriendsList'
import SearchField from "../common/SeatchField/SearchField";
import {useDispatch, useSelector} from "react-redux";
import {getFriendsData, getPreloader, getSearchName} from "../../redux/Selectors/FriendsSelectors";
import Preloader from "../Preloader/Preloader";
import {FriendsActions, getFriends} from "../../redux/Friends-reducer";
import {getIsAuth} from "../../redux/Selectors/AuthSelectors";
import {useHistory} from "react-router-dom";



export const Friends: React.FC = () => {

    const dispatch = useDispatch()
    const friends = useSelector(getFriendsData)
    const isAuth = useSelector(getIsAuth)
    const preloader = useSelector(getPreloader)
    const searchingUserName = useSelector(getSearchName)
    const history = useHistory()

    useEffect(()=> {
        isAuth
            ? dispatch(getFriends())
            : history.push({
            pathname: '/login'
            })
        return function cleanup() {
            dispatch(FriendsActions.setSearchingFriendName(''))
        };
    }, [])

    // @ts-ignore
    let YourFriends = friends.map(users => <FriendsList className={style.item} friends={users}/>)

    return (
        <div>
            {preloader
                ? <Preloader/>
                : <div>
                    <h5 className={style.blockName}>Your friends </h5>
                    <SearchField searchingUserName={searchingUserName}/>
                    <div className={style.BlockItem}>{YourFriends}</div>
                </div>}
        </div>
    )
}
