import {connect} from "react-redux";
import Friends from "./Friends";
import {getFriends} from "../../redux/Friends-reducer";
import React from 'react'
import Preloader from "../Preloader/Preloader";
import {friendsType} from "../../Type/Type";
import {AppStateType} from "../../redux/redux-store";

type props ={
    getFriends: () => void
    preloader: boolean
    friends: Array<friendsType>
}

class FriendsContainer extends React.Component<props> {
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


let mapStateToProps = (state:AppStateType) => {
    return {
        friends: state.friendsPage.friends,
        preloader: state.friendsPage.preloader
    }
}

export default connect(mapStateToProps, {getFriends})(FriendsContainer)
