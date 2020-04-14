import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
        {id: 1, name: 'Lexa'},
        {id: 2, name: 'Nikita'},
        {id: 3, name: 'Misha'},
        {id: 4, name: 'Anton'}
    ];
let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'kid'},
        {id: 3, message: 'do you'},
        {id: 4, message: 'like dope?'}
    ];

let posts = [
        {id: 1, message: 'Hi', likesCount: 20},
        {id: 2, message: 'It is my first post', likesCount: 10},
        {id: 3, message: 'Are you ok?', likesCount: 7},
    ];

ReactDOM.render(<App dialogs={dialogs} messages={messages} posts={posts}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
