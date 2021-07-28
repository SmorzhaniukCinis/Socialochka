import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router";
import {
    followUser,
    unFollowUser,
}
    from "../../redux/Users-Reducer";
import {
    requestProfile,
    requestStatus,
    setNewAvatarImg,
    updateStatus,
    uploadProfileData,
    requestCurrentUser
} from "../../redux/Priofile-reducer";
import {compose} from "redux";
import {Redirect} from 'react-router'
import {getProfile, getStatus} from "../../redux/Selectors/ProfileSelectors";
import {getIsAuth, getUserId} from "../../redux/Selectors/AuthSelectors";
import {getFollowingInProgress} from "../../redux/Selectors/UsersSelector";



class ProfileContainer extends React.Component {
    refreshProfile () {
        let userId = this.props.match.params.userId
        if (!userId) {userId = this.props.UserId}
        if (!userId) {
            this.props.history.push('/login')
        }
        this.props.requestProfile(userId)
        this.props.requestStatus(userId)
        this.props.requestCurrentUser(this.props.profile.fullName)
    }

    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId !== prevProps.match.params.userId)
        this.refreshProfile()
    }


    render() {
        return(

            this.props.isAuth ? <Profile owner={this.props.match.params.userId} {...this.props}/> : <Redirect to={'/login'}/>
        )

    }
}

let mapStateToProps = (state) => ({
    profile:getProfile(state),
    status: getStatus(state),
    UserId: getUserId(state),
    isAuth: getIsAuth(state),
    followingInProgress: getFollowingInProgress(state),
    subscription: state.profile.subscription
})

export default compose(
    connect(mapStateToProps, {requestCurrentUser, unFollowUser, followUser, uploadProfileData, setNewAvatarImg, requestProfile, requestStatus, updateStatus}),
    withRouter,
)(ProfileContainer)
