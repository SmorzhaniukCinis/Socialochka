import {ProfileActions} from "../../../redux/Priofile-reducer";
import PostsBlock from "./PostsBlock";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router";
import {AppStateType} from "../../../redux/redux-store";




let mapStateToProps = (state:AppStateType) => {
    return{
        posts : state.profile.posts,
        newPostText : state.profile.newPostText,
        profile: state.profile.profile
    }
}

export default compose (
    withRouter,
    connect (mapStateToProps, {addPost: ProfileActions.addPostAC })
) (PostsBlock);