import React from 'react';
import './Header.module.css';
import Header from "./Header";
import {connect} from "react-redux";
import {getHeader} from "../../redux/reducers/authReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getHeader();
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

export default connect(mapStateToProps, {getHeader})(HeaderContainer);