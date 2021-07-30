import React from 'react'
import {connect} from "react-redux";
import {
    changePage,
    dataFetching,
    followUser, getUsers, onFollowingProgress, setCurrentPortion,
    setTotalUsersCount,
    setUsers,
    unFollowUser,
}
    from "../../redux/Users-Reducer";
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
import {usersDataType} from "../../Type/Type";
import {AppStateType} from "../../redux/redux-store";



type propsStateType = {
    pageSize: number
    currentPage: number
    isFetching: boolean
    users: Array<usersDataType>
    totalCount: number
    PortionNumber: number
    portionCount: number
}
type propsDispatchType = {
    getUsers: (currentPage: number, pageSize: number) => void
    changePage: (page: number) => void
    followingInProgress: Array<number>
    unFollowUser: (id: number | null) => void
    followUser: (id: number | null) => void
    onPageChanged: (page: number) => void
    setCurrentPortion: (PortionNumber: number) => void
}
type propsType =    propsStateType & propsDispatchType



class UsersContainer extends React.Component<propsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)

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
    }
}


export default connect<propsStateType, propsDispatchType, null,  AppStateType>(mapStateToProps, {
    // @ts-ignore
    changePage,
    setTotalUsersCount,
    setUsers,
    dataFetching,
    onFollowingProgress,
    getUsers,
    unFollowUser,
    followUser,
    setCurrentPortion
    // @ts-ignore
})(UsersContainer)
