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
import {AppStateType} from "../../redux/redux-store";

type props = {
    match: any
    UserId: number
    history: any
    requestProfile: (userId: number) => void
    requestStatus: (userId: number) => void
    isAuth: boolean
}

class ProfileContainer extends React.Component<props> {
    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.UserId
        }
        if (!userId) {
            this.props.history.push('/login')
        }
        this.props.requestProfile(userId)
        this.props.requestStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId)
            this.refreshProfile()
    }


    render() {
        return (
             // @ts-ignore
            this.props.isAuth ? <Profile owner={this.props.match.params.userId} {...this.props}/> :
                <Redirect to={'/login'}/>
        )

    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: getProfile(state),
    status: getStatus(state),
    UserId: getUserId(state),
    isAuth: getIsAuth(state),
    followingInProgress: getFollowingInProgress(state),
    subscription: state.profile.subscription
})

export default compose(
    connect(mapStateToProps, {
        requestCurrentUser,
        unFollowUser,
        followUser,
        uploadProfileData,
        setNewAvatarImg,
        requestProfile,
        requestStatus,
        updateStatus
    }),
    withRouter,
)(ProfileContainer)
