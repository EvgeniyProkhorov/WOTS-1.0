import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import {authReducer} from "./auth-reducer";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type ReduxStoreType = typeof store

export type AppStateType = ReturnType<typeof rootReducer>
// export type DispatchType = typeof dispatch

const store = createStore(rootReducer, applyMiddleware());
// const dispatch = store.dispatch.bind(store)

//@ts-ignore
window.store = store;

export default store