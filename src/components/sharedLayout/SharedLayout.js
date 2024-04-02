import React from "react";
import {  Header, Link,Nav } from "./SharedLayout.styled";
import { Outlet } from "react-router-dom";
import Container from "../containter/Container";

export default function SharedLayout(){
    return(
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
                <Outlet />
            </Container>    
        </Header>
    )
}