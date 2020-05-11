import React from 'react';
import './Header.module.css';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/reducers/authReducer";
import {headerAPI} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        headerAPI.getHeader()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
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