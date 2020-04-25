import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Dialogs from "./components/dialogs/Dialogs";
import Profile from "./components/profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/news/News";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar sideBar={props.state.sideBar}/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <Dialogs store={props.store}/>}/>
                <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                              dispatch={props.dispatch}
                />}/>
                <Route path='/news' render={() => <News/>}/>
            </div>
        </div>
    )
};

export default App;
