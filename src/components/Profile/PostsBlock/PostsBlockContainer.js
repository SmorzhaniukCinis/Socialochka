import {addPostAC} from "../../../redux/Priofile-reducer";
import PostsBlock from "./PostsBlock";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router";




let mapStateToProps = (state) => {
    return{
        posts : state.profile.posts,
        newPostText : state.profile.newPostText,
        fullName: state.profile.profile.fullName
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost : (text) => {
            dispatch(addPostAC(text))
        }
    }
}

export default compose (
    withRouter,
    connect (mapStateToProps, mapDispatchToProps)
) (PostsBlock);