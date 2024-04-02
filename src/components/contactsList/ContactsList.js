import React from "react";
import './ContactsList.css'


export default function ContactsList(){
    return(
    
        <ul className="contacts-list">
            <li className="contacts-list__item">
                <p className="contact-name">Ort</p>
                <p>Gottfried-Keller-Straße 1,<br/>45721 Haltern am See</p>
            </li>

            <li className="contacts-list__item">
                <p className="contact-name">Telefonnummer</p>
                <p>+4915738404740</p>   
            </li>

            <li className="contacts-list__item">
                <p className="contact-name">Email</p>
                <p>volodymyrkostroba@gmail.com</p>    
            </li>
        </ul>
    

    )
}