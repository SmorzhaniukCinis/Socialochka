import {addPostAC} from "../../../redux/Priofile-reducer";
import PostsBlock from "./PostsBlock";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return{
        posts : state.profile.posts,
        newPostText : state.profile.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost : (text) => {
            dispatch(addPostAC(text))
        }
    }
}


let PostsBlockContainer = connect (mapStateToProps, mapDispatchToProps) (PostsBlock)

export default PostsBlockContainer;