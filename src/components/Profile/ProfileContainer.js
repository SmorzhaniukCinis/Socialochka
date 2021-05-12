import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import {setProfile} from "../../redux/Priofile-reducer";
import {withRouter} from "react-router";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {userId = 2}
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setProfile(response.data)
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