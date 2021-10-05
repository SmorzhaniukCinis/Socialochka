import {connect} from "react-redux";
import Friends from "./Friends";
import {FriendsActions, getFriends, searchFiends} from "../../redux/Friends-reducer";
import React from 'react'
import Preloader from "../Preloader/Preloader";
import {friendsType} from "../../Type/Types";
import {AppStateType} from "../../redux/redux-store";
import {getUsers, UserActions} from "../../redux/Users-Reducer";

type props = {
    searchFiends: (userName: string) => void
    getFriends: () => void
    preloader: boolean
    friends: Array<friendsType>
    searchingUserName: string
    setSearchingUserName: (userName: string) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

class FriendsContainer extends React.Component<props> {
    componentDidMount() {
        this.props.getFriends()
    }
    componentWillUnmount() {
        this.props.setSearchingUserName('')
    }

    render() {
        return (<div>
                {this.props.preloader
                    ? <Preloader/>
                    : <Friends {...this.props}/>}
            </div>
        )

    }
}


let mapStateToProps = (state: AppStateType) => {
    return {
        friends: state.friendsPage.friends,
        preloader: state.friendsPage.preloader,
        searchingUserName: state.friendsPage.searchName
    }
}

export default connect(mapStateToProps, {
    setSearchingUserName: FriendsActions.setSearchingFriendName,
    getUsers,
    searchFiends, getFriends
})
(FriendsContainer)
