import {addPostCreator, updateNewPostTextCreator} from "../../../redux/reducers/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostCreator());
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextCreator(text));
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;