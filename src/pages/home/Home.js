import React from "react";
import Container from "../../components/containter/Container";
import SocialList from "../../components/socialList/SocialList";
import Hero from "../../components/hero/Hero";

// import ReactPlayer from "react-player";

// import { PlayerWrapper,StyledPlayer } from "../../components/player/Player.styled";

export default function Home(){
    return(
        <main>
            <section>
                <Container>
                    <Hero/>
                    <SocialList/>
                </Container>
            </section>

            
        </main>
        
    )
}