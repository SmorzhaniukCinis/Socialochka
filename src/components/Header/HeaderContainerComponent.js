import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import axios from "axios";
import {setUserAuthData} from "../../redux/Auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                    this.props.setUserAuthData(response.data.data)
                }
            )
    }
    render() {
        return(
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({
    id: state.auth.id,
    login: state.auth.login,
    email: state.auth.email
})

export default connect (mapStateToProps, {setUserAuthData})(HeaderContainer)