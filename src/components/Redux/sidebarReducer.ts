import {ActionsType, SidebarType} from "./store";

let sidebarInit = {
    friends: [
        {id: 1, name: 'Anna'},
        {id: 2, name: 'Evgen'},
        {id: 3, name: 'Kolyan'},
    ]
}

const sidebarReducer = (state: SidebarType = sidebarInit, action: ActionsType) => {

    return state
}

export default sidebarReducer;