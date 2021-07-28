import {connect} from "react-redux";
import Friends from "./Friends";
import {getFriends} from "../../redux/Friends-reducer";
import React from 'react'
import Preloader from "../Preloader/Preloader";

class FriendsContainer extends React.Component {
    componentDidMount() {
        this.props.getFriends()
    }

    render() {
        return (<div>
                {this.props.preloader
                    ? <Preloader/>
                    :<Friends {...this.props}/>}
            </div>
        )

    }
}


let mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends,
        preloader: state.friendsPage.preloader
    }
}

export default connect(mapStateToProps, {getFriends})(FriendsContainer)
