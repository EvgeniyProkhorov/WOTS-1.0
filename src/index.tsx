import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./App";
import store, {AppStateType} from "./components/Redux/redux-store";
import {Provider} from "./StoreContext";


export const rerenderEntireTree = (state: AppStateType) => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState())

store.subscribe(() => rerenderEntireTree(store.getState()))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
