import React, { Fragment } from "react";
import { Suspense } from "react";
import {  Header, Link,Nav } from "./SharedLayout.styled";
import { Outlet } from "react-router-dom";
import Container from "../containter/Container";

export default function SharedLayout(){
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

        <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
        </Suspense>
        
        </Fragment>
        
    )
}