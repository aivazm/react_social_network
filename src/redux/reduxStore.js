import dialogsReducer from "./reducers/dialogsReducer";
import profileReducer from "./reducers/profileReducer";
import sidebarReducer from "./reducers/sidebarReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import usersReducer from "./reducers/usersReducer";
import authReducer from "./reducers/authReducer";
import thunkMiddleware from "redux-thunk";

let reduces = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reduces, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;