import React from "react";
import Container from "../../components/containter/Container";

import ExapmplesList from "../../components/examplesList/ExamplesList";
import examples from "../../materials/examples";
// import ".../img/screenschots/"

export default function Portfolio(){
    return(
        <main>
            <section>
                <Container>
                    <ExapmplesList examples={examples}/>
                </Container>
            </section>
        </main>
        
        
    )
}

