import React from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css';

import NavigationBar from '../global_components/navigation_bar/NavigationBar';

import PageComponent from '../interfaces/pageComponent';

import Profile from '../pages/profile/Profile';
import TestingSession from '../pages/testing_session/TestingSession';

function Plug(){
    return (<div></div>)
}

const pages = [{path: "/about", element: <Plug />, label_element: <h2>О НАС</h2>},
               {path: "/rates", element: <Plug />, label_element: <h2>ТАРИФЫ</h2>},
               {path: "/test", element: <TestingSession />, label_element: <img src={process.env.PUBLIC_URL + '/navigation_bar_assets/group.svg'} alt='unused-button' />},
               {path: "/profile", element: <Profile />, label_element: <img src={process.env.PUBLIC_URL + '/navigation_bar_assets/profile_logo.svg'} alt='profile-button'/>} 
              ];


function App() {
    return (
        <div >
            <NavigationBar pages={pages}/>    
            <Routes>
            {pages.map((page: PageComponent) => (
                <Route path={page.path} element={page.element}> </Route>     
            ))}
            </Routes>

        </div>
    );
}

export default App;
