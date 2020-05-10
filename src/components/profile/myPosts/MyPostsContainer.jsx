import {addPost, updateNewPostText,} from "../../../redux/reducers/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

const MyPostsContainer = connect(mapStateToProps, {addPost, updateNewPostText})(MyPosts);

export default MyPostsContainer;