import React, { Fragment } from "react";
import './ExapmplesList.css'
// import calculator from '../../img/screenschots/calculator.png'


export default function ExapmplesList({examples}){
    return(
        <Fragment>
            <h2 className="examples-title">Hier finden Sie Beispiele meiner Arbeit</h2>
            <ul className="examples-list">
                {examples.map(({name,id,img,githubPage,livePage}) =>(
                    <li key={id} className="examples-list__item">
                        <img src={img} alt="img"/>
                        <h3 className="examples-list__title">{name}</h3>
                        <div className="examples-list__links">
                            <a href={githubPage} target="blank">GitHub</a>
                            <a href={livePage} target="blank">Livepage</a>
                        </div>
                    </li>
                )
                  )}
            </ul>
        </Fragment>
    )

}