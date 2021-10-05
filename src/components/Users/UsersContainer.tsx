import React from 'react'
import {connect} from "react-redux";
import {
    followUser, getUsers, searchUsers,
    unFollowUser,
}
    from "../../redux/Users-Reducer";
import {UserActions} from "../../redux/Users-Reducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {getProfile} from "../../redux/Selectors/ProfileSelectors";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching, getPageSize,
    getPortionCount,
    getPortionNumber, getTotalCount, getUsersData
} from "../../redux/Selectors/UsersSelector";
import {usersDataType} from "../../Type/Types";
import {AppStateType} from "../../redux/redux-store";


type propsStateType = {
    pageSize: number
    currentPage: number
    isFetching: boolean
    users: Array<usersDataType>
    totalCount: number
    PortionNumber: number
    portionCount: number
    searchingUserName: string
}
type propsDispatchType = {
    getUsers: (currentPage: number, pageSize: number) => void
    changePage: (page: number) => void
    followingInProgress: Array<number>
    unFollowUser: (id: number | null) => void
    followUser: (id: number | null) => void
    onPageChanged: (page: number) => void
    setCurrentPortion: (PortionNumber: number) => void
    searchUsers: (userName:string) => void
    setSearchingUserName: (userName:string) => void
}
type propsType = propsStateType & propsDispatchType


class UsersContainer extends React.Component<propsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)

    }
    componentWillUnmount() {
        this.props.setSearchingUserName('')
    }

    onPageChanged = (page: number) => {
        this.props.changePage(page)
        this.props.getUsers(page, this.props.pageSize)
    }


    render() {

        return (<div>
                {this.props.isFetching ? <Preloader/> :
                    <Users {...this.props} onPageChanged={this.onPageChanged}/>}
            </div>

        )
    }


}

let mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsersData(state),
        totalCount: getTotalCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        portionCount: getPortionCount(state),
        PortionNumber: getPortionNumber(state),
        profile: getProfile(state),
        searchingUserName: state.usersPage.searchingUserName
    }
}


export default connect<propsStateType, propsDispatchType, null, AppStateType>(mapStateToProps, {
    // @ts-ignore
    changePage: UserActions.changePage,
    setTotalUsersCount : UserActions.setTotalUsersCount,
    setUsers: UserActions.setUsers,
    dataFetching: UserActions.dataFetching,
    onFollowingProgress: UserActions.onFollowingProgress,
    searchUsers,
    getUsers,
    unFollowUser,
    followUser,
    setSearchingUserName: UserActions.setSearchingUserName,
    setCurrentPortion: UserActions.setCurrentPortion

})(UsersContainer)
