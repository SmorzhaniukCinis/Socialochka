import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router";
import {getProfile, getStatus, updateStatus} from "../../redux/Priofile-reducer";
import {compose} from "redux";
import {Redirect} from 'react-router'



class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {userId = this.props.UserId}
            if (!userId) {
                this.props.history.push('/login')
            }
            this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {

        return(
            this.props.isAuth ? <Profile {...this.props}/> : <Redirect to={'/login'}/>
        )

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
