import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Dialogs from "./components/dialogs/Dialogs";
import Profile from "./components/profile/Profile";
import {BrowserRouter, Route} from "react-router-dom"
import News from "./components/news/News";

const App = () => {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path ='/dialogs' component={Dialogs}/>
                <Route path ='/profile' component={Profile}/>
                <Route path ='/news' component={News}/>
            </div>
        </div>
        </BrowserRouter>
    )
};

export default App;
