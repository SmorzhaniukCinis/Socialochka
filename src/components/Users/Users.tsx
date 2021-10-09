import React from "react";
import s from "./Users.module.css";
import avatarPhoto from "../../defaultData/avatarDefoult.png";
import {NavLink} from "react-router-dom";
import Pagination from "./Pagination/Pagination";
import SearchField from "./SeatchField/SearchField";
import {useDispatch, useSelector} from "react-redux";
import {getSearchingUserName, getTotalCount, getUsersData} from "../../redux/Selectors/UsersSelector";
import {unFollowUser} from "../../redux/Users-Reducer";


type props = {
    pageSize: number
    PortionNumber: number
    portionCount: number
    currentPage: number

    changePage: (page: number) => void
    followingInProgress: Array<number>
    unFollowUser: (id: number | null) => void
    followUser: (id: number | null) => void
    onPageChanged: (page: number, searchingUserName:string) => void
    setCurrentPortion: (PortionNumber: number) => void
    searchUsers: (userName: string, page:number) => void
    setSearchingUserName: (userName: string) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

let Users: React.FC<props> = (props) => {

    const dispatch = useDispatch()
    const users = useSelector(getUsersData)
    const totalCount = useSelector(getTotalCount)
    const searchingUserName = useSelector(getSearchingUserName)




    return (
        <div >
            <div className={s.main}>
                <SearchField changePage={props.changePage} getUsers={props.getUsers} setSearchingUserName={props.setSearchingUserName}
                             searchingUserName={searchingUserName} searchUsers={props.searchUsers}/>
            </div>

            {users.map(u => <div key={u.id} className={s.container}>

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
                                    dispatch(unFollowUser(u.id))
                                }}>Unfollow</button>
                        :
                        <button disabled={props.followingInProgress.some(id => id === u.id)} className={s.followButton}
                                onClick={() => {
                                    props.followUser(u.id)
                                }}>Follow</button>}
                </div>

                <div className={s.rightBlock}>
                    <span><mark className={s.statusTitle}>Status:</mark>
                        {u.status || 'no status'}</span>
                </div>
            </div>)}

            {totalCount > 5 &&
            <Pagination portionCount={props.portionCount} totalCount={totalCount}
                        onPageChanged={props.onPageChanged} currentPage={props.currentPage}
                        pageSize={props.pageSize} setCurrentPortion={props.setCurrentPortion}
                        PortionNumber={props.PortionNumber} searchingUserName={searchingUserName}/>
            }
        </div>
    )
}

export default Users