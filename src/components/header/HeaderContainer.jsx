import React from 'react';
import './Header.module.css';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/reducers/authReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        const HOST = `https://social-network.samuraijs.com/api/1.0`;
        const SERVICE = `/auth/me/`;

        axios.get(HOST + SERVICE, {withCredentials: true})
            .then(response => {
                debugger
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    this.props.setAuthUserData(id, login, email);
                }

            });
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);