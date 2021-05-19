import React from 'react'
import {connect} from "react-redux";
import {
    changePage,
    dataFetching,
    followUser,
    setTotalUsersCount,
    setUsers,
    unFollowUser,
}
    from "../../redux/Users-Reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.dataFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {
                withCredentials: true
            })
            .then(response => {
                this.props.dataFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })

    }

    onPageChanged = (page) => {
        this.props.changePage(page)
        this.props.dataFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`,
            {
                withCredentials: true
            })
            .then(response => {
                this.props.dataFetching(false)
                this.props.setUsers(response.data.items)
            })
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
        isFetching: state.usersPage.isFetching
    }
}


export default connect(mapStateToProps, {
    followUser,
    changePage,
    unFollowUser,
    setTotalUsersCount,
    setUsers,
    dataFetching
})(UsersContainer)
