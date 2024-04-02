import React from "react";
import Container from "../../components/containter/Container";
import skills from "../../materials/skills";
import SkillsList from "../../components/skillsList/SkillsList";
import '../../components/skillsList/SkillsList.css'
import Aplication from "../../components/aplication/Aplication";
import Player from "../../components/player/Player";

export default function Info(){
    const link = 'https://www.youtube.com/watch?v=JyNWQm77-_w'
    return(
        <main>
            <section>
                <Container>
                    <h2 className="skills-list__title">Videobewerbug</h2>
                    <Player link={link}/>
                    <h2 className="skills-list__title">Bewerbung</h2>
                    <Aplication/>
                </Container>
            </section>
            <section>
                <Container> 
                    <h2 className="skills-list__title">Meine tech Skills</h2>
                    <SkillsList skills={skills}/>
                </Container>
            </section>

        </main>
    )
}