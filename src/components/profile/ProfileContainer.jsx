import React from 'react';
import './Profile.module.css';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/reducers/profileReducer";

class ProfileContainer extends React.Component {

    componentDidMount() {
        const URL = `https://social-network.samuraijs.com/api/1.0/profile/2`;
        axios.get(URL)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);