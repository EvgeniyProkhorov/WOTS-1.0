import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {RootStateType} from "./components/Redux/state";

export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
    console.log("render complete")
}