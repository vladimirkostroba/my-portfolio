import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import {  Header, Link,Nav } from "./components/sharedLayout/SharedLayout.styled";
import Container from "./components/containter/Container";
// import SharedLayout from "./components/sharedLayout/SharedLayout";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import Contacts from "./pages/contacts/Contacts";
import Info from "./pages/info/Info";
// import ExapmplesList from "./components/examplesList/ExamplesList";
// import examples from "./materials/examples"

export default function App(){
    return(
        <Fragment>
            <Header>
            <Container>
                <Nav>
                    <Link to="/"end>
                        Hallo
                    </Link>
                    <Link to="/info">
                        Info
                    </Link>
                    <Link to="/portfolio">
                        Beispiele
                    </Link>
                    <Link to="/contacts">
                        Contacts
                    </Link>
                </Nav>
            </Container>    
            </Header>
                <Routes>
                
                    <Route path="/" element={<Home/>}/>
                    <Route path="/info" element={<Info/>}/>
                    <Route path="/portfolio" element={<Portfolio/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                  
            </Routes>
        </Fragment>
    )
}