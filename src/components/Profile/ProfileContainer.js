import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router";
import { Redirect } from 'react-router'
import {getProfile} from "../../redux/Priofile-reducer";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {userId = 2}
            this.props.getProfile(userId)
    }

    render() {


        return (<Profile {...this.props}/>)
    }
}

let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => ({
        profile: state.profile.profile
})
let ProfileUrl = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getProfile}) (ProfileUrl)