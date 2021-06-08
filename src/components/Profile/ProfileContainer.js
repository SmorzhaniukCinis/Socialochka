import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router";
import {getProfile, getStatus, updateStatus} from "../../redux/Priofile-reducer";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {userId = this.props.UserId}
            this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {


        return (<Profile {...this.props}/>)
    }
}

let mapStateToProps = (state) => ({
    profile: state.profile.profile,
    status: state.profile.status,
    UserId: state.auth.id,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter,
    // WithAuthRedirect
)(ProfileContainer)
