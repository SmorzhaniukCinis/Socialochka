import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {setProfile} from "../../redux/Priofile-reducer";
import {withRouter} from "react-router";
import {profileAPI} from "../../api/api";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {userId = 2}
            profileAPI.getProfile(userId)
            .then(data => {
                this.props.setProfile(data)
            })
    }

    render() {
        return (<Profile {...this.props}/>)
    }
}

let mapStateToProps = (state) => ({
        profile: state.profile.profile,
})

let ProfileUrl = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setProfile}) (ProfileUrl)