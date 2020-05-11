import dialogsReducer from "./reducers/dialogsReducer";
import profileReducer from "./reducers/profileReducer";
import sidebarReducer from "./reducers/sidebarReducer";
import {combineReducers, createStore} from "redux";
import usersReducer from "./reducers/usersReducer";
import authReducer from "./reducers/authReducer";

let reduces = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reduces);
window.store = store;
export default store;