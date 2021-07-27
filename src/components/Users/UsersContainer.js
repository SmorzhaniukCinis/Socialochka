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
        users: state.usersPage.usersData,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        portionCount: state.usersPage.portionCount,
        PortionNumber: state.usersPage.PortionNumber,
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
