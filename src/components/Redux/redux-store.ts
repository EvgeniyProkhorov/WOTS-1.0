import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

export type ReduxStoreType = typeof store

export type AppStateType = ReturnType<typeof rootReducer>
export type DispatchType = typeof dispatch

const store = createStore(rootReducer);
const dispatch = store.dispatch.bind(store)


export default store