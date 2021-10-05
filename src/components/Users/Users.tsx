import React from "react";
import s from "./Users.module.css";
import avatarPhoto from "../../defaultData/avatarDefoult.png";
import {NavLink} from "react-router-dom";
import Pagination from "./Pagination/Pagination";
import {usersDataType} from "../../Type/Types";
import SearchField from "./SeatchField/SearchField";
import {UserActions} from "../../redux/Users-Reducer";


type props = {
    users: Array<usersDataType>
    totalCount:number
    pageSize:number
    PortionNumber: number
    portionCount: number
    currentPage: number
    searchingUserName:string

    followingInProgress: Array<number>
    unFollowUser: (id:number| null) => void
    followUser: (id:number| null) => void
    onPageChanged: (page:number) => void
    setCurrentPortion: (PortionNumber:number) => void
    searchUsers: (userName:string) => void
    setSearchingUserName: (userName:string) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

let Users: React.FC<props> = (props) => {
    return (
        <div className={s.main}>

            <SearchField getUsers={props.getUsers} setSearchingUserName={props.setSearchingUserName} searchingUserName={props.searchingUserName} searchUsers={props.searchUsers}/>

            {props.users.map(u => <div key={u.id} className={s.container}>

                <div className={s.leftBlock}>
                    <NavLink className={s.nawLink} to={'/profile/' + u.id}>
                        <img src={(u.photos.small === null)
                            ? avatarPhoto : u.photos.small} alt="ava"/>
                        <span className={s.userName}>{u.name}</span>
                    </NavLink>

                    {u.followed
                        ?
                        <button disabled={props.followingInProgress.some(id => id === u.id)} className={s.followButton}
                                onClick={() => {
                                    props.unFollowUser(u.id)
                                }}>Unfollow</button>
                        :
                        <button disabled={props.followingInProgress.some(id => id === u.id)} className={s.followButton}
                                onClick={() => {
                                    props.followUser(u.id)
                                }}>Follow</button>}
                </div>

                <div className={s.rightBlock}>
                    <span><mark className={s.statusTitle}>Status:</mark> {u.status || 'no status'}</span>
                </div>
            </div>)}

            { props.totalCount > 5 &&
                <Pagination portionCount={props.portionCount} totalCount={props.totalCount}
                            onPageChanged={props.onPageChanged} currentPage={props.currentPage}
                            pageSize={props.pageSize} setCurrentPortion={props.setCurrentPortion}
                            PortionNumber={props.PortionNumber}/>
            }
        </div>
    )
}

export default Users