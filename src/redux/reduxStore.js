import dialogsReducer from "./reducers/dialogsReducer";
import profileReducer from "./reducers/profileReducer";
import sidebarReducer from "./reducers/sidebarReducer";
import {combineReducers, createStore} from "redux";

let reduces = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage:profileReducer,
    sideBar: sidebarReducer
});

let store = createStore(reduces);

export default store;