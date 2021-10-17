import React, {useEffect} from "react";
import s from "./Users.module.css";
import avatarPhoto from "../../defaultData/avatarDefoult.png";
import {useHistory} from "react-router-dom";
import Pagination from "./Pagination/Pagination";
import SearchField from "../common/SeatchField/SearchField";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getSearchingUserName,
    getTotalCount,
    getUsersData
} from "../../redux/Selectors/UsersSelector";
import {followUser, getUsers, searchUsers, unFollowUser, UserActions} from "../../redux/Users-Reducer";
import Preloader from "../Preloader/Preloader";
import * as queryString from "querystring";
import {getIsAuth} from "../../redux/Selectors/AuthSelectors";


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

    const isAuth = useSelector(getIsAuth)

    useEffect(() => {
        history.push({
            pathname: '/users',
            search: `?term=${searchingUserName}&page=${currentPage}`
        })
    }, [searchingUserName, currentPage])

    const goToUserProfile = (id: number) => {
        history.push(
            {
                pathname: '/profile',
                search: `?id=${id}`
            }
        )
    }

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
                            <div onClick={() => goToUserProfile(u.id)} className={s.nawLink}>
                                <img src={(u.photos.small === null)
                                    ? avatarPhoto : u.photos.small} alt="ava"/>
                                <span className={s.userName}>{u.name}</span>
                            </div>

                            {u.followed
                                ?
                                <button disabled={followingInProgress.some(id => id === u.id)}
                                        className={s.followButton}
                                        onClick={() => {
                                            isAuth
                                                ? dispatch(unFollowUser(u.id))
                                                : history.push({
                                                    pathname: '/login'
                                                })
                                        }}>Unfollow</button>
                                :
                                <button disabled={followingInProgress.some(id => id === u.id)}
                                        className={s.followButton}
                                        onClick={() => {
                                            isAuth
                                                ? dispatch(followUser(u.id))
                                                : history.push({
                                                    pathname: '/login'
                                                })
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
