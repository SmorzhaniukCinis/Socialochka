import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router";
import {requestProfile, requestStatus, updateStatus} from "../../redux/Priofile-reducer";
import {compose} from "redux";
import {Redirect} from 'react-router'
import {getProfile, getStatus} from "../../redux/Selectors/ProfileSelectors";
import {getIsAuth, getUserId} from "../../redux/Selectors/AuthSelectors";



class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {userId = this.props.UserId}
            if (!userId) {
                this.props.history.push('/login')
            }
            this.props.requestProfile(userId)
        this.props.requestStatus(userId)
    }

    render() {

        return(
            this.props.isAuth ? <Profile {...this.props}/> : <Redirect to={'/login'}/>
        )

    }
}

let mapStateToProps = (state) => ({
    profile:getProfile(state),
    status: getStatus(state),
    UserId: getUserId(state),
    isAuth: getIsAuth(state)
})

export default compose(
    connect(mapStateToProps, {requestProfile, requestStatus, updateStatus}),
    withRouter,
    // WithAuthRedirect
)(ProfileContainer)
