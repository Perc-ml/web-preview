import React from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css';

import NavigationBar from '../global_components/navigation_bar/NavigationBar';

function App() {
    return (
        <div >
            <NavigationBar />    
            <Routes>
                <Route path="/" element={<div></div>}></Route>
            </Routes>

        </div>
    );
}

export default App;
