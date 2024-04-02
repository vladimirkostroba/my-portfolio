import React from "react";
import ContactsList from "../contactsList/ContactsList";
import './ContactsBox.css'

export default function ContactsBox(){
    return(
        <div className="contacts-box">
            <p className="contacts-box__description">Abschließend möchte ich Ihnen sagen, dass ich ein pünktlicher und zielstrebiger Mensch bin, der alles pünktlich und mit hoher Qualität erledigt. Ich liebe und schätze meine Tätigkeit. Ich freue mich immer über Ihre Vorschläge. Melden Sie sich jederzeit!</p>
            <ContactsList/>
        </div>
    )
}