import React, {useEffect} from "react";
import s from "./Users.module.css";
import avatarPhoto from "../../defaultData/avatarDefoult.png";
import {NavLink, useHistory} from "react-router-dom";
import Pagination from "./Pagination/Pagination";
import SearchField from "../common/SeatchField/SearchField";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFollowingInProgress, getIsFetching, getPageSize,
    getSearchingUserName,
    getTotalCount,
    getUsersData
} from "../../redux/Selectors/UsersSelector";
import {followUser, getUsers, searchUsers, unFollowUser, UserActions} from "../../redux/Users-Reducer";
import Preloader from "../Preloader/Preloader";
import * as queryString from "querystring";


export const Users: React.FC = () => {

    const dispatch = useDispatch()
    const users = useSelector(getUsersData)
    const totalCount = useSelector(getTotalCount)
    const followingInProgress = useSelector(getFollowingInProgress)
    const searchingUserName = useSelector(getSearchingUserName)
    const isFetching = useSelector(getIsFetching)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)


    const history = useHistory()


    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substr(1)) as { page: string; term: string }

        let actualPage = currentPage
        let actualTerm = searchingUserName
        if (parsed.page) actualPage = Number(parsed.page)
        if (parsed.term) actualTerm = parsed.term as string
        actualTerm
            ? dispatch(searchUsers(actualTerm, actualPage))
            : dispatch(getUsers(actualPage, pageSize))
        return function cleanup() {
            dispatch(UserActions.setSearchingUserName(''))
            dispatch(UserActions.changePage(1))
        };
    }, []);

    useEffect(() =>{
        history.push({
            pathname: '/users',
            search: `?term=${searchingUserName}&page=${currentPage}`
        })
    }, [searchingUserName, currentPage])


    return (

        <div>
            {isFetching
                ? <Preloader/>
                : <div>
                    <div className={s.main}>
                        <SearchField searchingUserName={searchingUserName}/>
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
                                <button disabled={followingInProgress.some(id => id === u.id)}
                                        className={s.followButton}
                                        onClick={() => {
                                            dispatch(unFollowUser(u.id))
                                        }}>Unfollow</button>
                                :
                                <button disabled={followingInProgress.some(id => id === u.id)}
                                        className={s.followButton}
                                        onClick={() => {
                                            dispatch(followUser(u.id))
                                        }}>Follow</button>}
                        </div>

                        <div className={s.rightBlock}>
                    <span><mark className={s.statusTitle}>Status:</mark>
                        {u.status || 'no status'}</span>
                        </div>
                    </div>)}

                    {totalCount > 5 &&
                    <Pagination currentPage={currentPage} pageSize={pageSize} totalCount={totalCount}
                                searchingUserName={searchingUserName}/>
                    }
                </div>
            }
        </div>
    )
}
