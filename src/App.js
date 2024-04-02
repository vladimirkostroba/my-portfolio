import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import SharedLayout from "./components/sharedLayout/SharedLayout";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import Contacts from "./pages/contacts/Contacts";
import Info from "./pages/info/Info";
// import ExapmplesList from "./components/examplesList/ExamplesList";
// import examples from "./materials/examples"

export default function App(){
    return(
        <Fragment>
                <Routes>
                <Route path="/" element={<SharedLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/info" element={<Info/>}/>
                    <Route path="/portfolio" element={<Portfolio/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                </Route>    
            </Routes>
        </Fragment>
    )
}