import React from 'react'
import {connect} from "react-redux";
import {
    changePage,
    dataFetching,
    followUser, getUsers, onFollowingProgress,
    setTotalUsersCount,
    setUsers,
    unFollowUser,
}
    from "../../redux/Users-Reducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";

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
                    <Users
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        totalCount={this.props.totalCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        followUser={this.props.followUser}
                        unFollowUser={this.props.unFollowUser}
                        isFetching={this.props.isFetching}
                        followingInProgress={this.props.followingInProgress}
                        onFollowingProgress={this.props.onFollowingProgress}

                    />}
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
        followingInProgress: state.usersPage.followingInProgress
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
    followUser
})(UsersContainer)
