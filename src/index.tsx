import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {store, StoreType} from "./components/Redux/state";
import ReactDOM from "react-dom";
import App from "./App";

const rerenderEntireTree = (state: StoreType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={state}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
    console.log("render complete")
}

rerenderEntireTree(store)

store.subscribe(() => rerenderEntireTree(store))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
