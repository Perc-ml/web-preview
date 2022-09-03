import React from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css';

import NavigationBar from '../global_components/navigation_bar/NavigationBar';

import PageConponent from '../interfaces/pageComponent';

function Plug(){
    return (<div></div>)
}



                    {/* <li>></li>
                    <li><h2>ТАРИФЫ</h2></li>
                    <li></li>
                    <li></li> */}

const pages = [{path: "/about", element: <Plug />, label_element: <h2>О НАС</h2>},
               {path: "/rates", element: <Plug />, label_element: <h2>ТАРИФЫ</h2>},
               {path: "/test", element: <Plug />, label_element: <img src={process.env.PUBLIC_URL + '/navigation_bar_assets/group.svg'} alt='unused-button' />},
               {path: "/", element: <Plug />, label_element: <img src={process.env.PUBLIC_URL + '/navigation_bar_assets/profile_logo.svg'} alt='profile-button'/>} 
              ];


function App() {
    return (
        <div >
            <NavigationBar pages={pages}/>    
            <Routes>
            {pages.map((page: PageConponent) => (
                <Route path={page.path} element={page.element}> </Route>     
            ))}
            </Routes>

        </div>
    );
}

export default App;
