import React, { useState } from "react";
import './Aplication.css'
// import photo from '../../img/lebenslauf/Bewerbung-photo.jpg'
import lebenslauf from '../../img/lebenslauf/Lebenslauf_demo.png'
import Container from "../containter/Container";
import Modal from "../modal/Modal";
import Text from "../text/Text";

export default function Aplication(){

    const [isOpenModal, setIsOpenModal] = useState(false)
    const [isOpenText, setIsOpenText] = useState(false)


    function closeText(){
        setIsOpenText(false)
    }

    function openText(e){
        setIsOpenText(true)
    }
    
// 
    function closeModal(){
        setIsOpenModal(false)
    }

    function openModal(e){
        setIsOpenModal(true)
    }

    return(
        <div className="aplication">
            <ul className="aplication-list">
                <li className="aplication-list__item">
                    <h3>Anschreiben</h3>
                    <button className="button-34 button" type="button" onClick={openText}>ansehen</button>
                </li>

                <li className="aplication-list__item">
                    <h3>Lebenslauf</h3>
                    <a className="button-33 button" 
                    href="../../img/lebenslauf/Lebenslauf_Kostroba.pdf" 
                    download>herunterladen</a>
                </li>

                <li className="aplication-list__item">
                    <h3>Lebenslauf</h3>
                    <button className="button-34 button" type="button" onClick={openModal}>ansehen</button>
                </li>
            </ul>

            {isOpenText && <Modal onClose={closeText}>
                <Container>
                    <Text/>
                </Container> 
                </Modal>}

            {isOpenModal && <Modal onClose={closeModal}>
                <img src={lebenslauf} alt="lebenslauf"/>
              </Modal>}
        </div>
    )
}

