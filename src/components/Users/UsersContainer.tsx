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

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)

    }

    onPageChanged = (page) => {
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

let mapStateToProps = (state) => {
    return {
        users: getUsersData(state),
        totalCount: getTotalCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        portionCount: getPortionCount(state),
        PortionNumber:getPortionNumber(state),
        profile:getProfile(state),
    }
}


export default connect(mapStateToProps, {
    changePage,
    setTotalUsersCount,
    setUsers,
    dataFetching,
    onFollowingProgress,
    getUsers,
    unFollowUser,
    followUser,
    setCurrentPortion
})(UsersContainer)
