import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div>
            <Header/>
            <Technologies/>
        </div>
    );
}

function Technologies() {
    return (
        <div>
            <ul>
                <li>css</li>
                <li>html</li>
                <li>js</li>
                <li>react</li>
            </ul>
        </div>
    )
}

function Header() {
    return (
        <div>
            <a href="#s">Home</a>
            <a href="#s">News Feed</a>
            <a href="#s">Messages</a>
        </div>
    );
}

export default App;
