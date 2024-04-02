import React from "react";
import './SocialList.css'

export default function SocialList(){
    return(
        <ul className="social-list">
            <li className="social-list__item">
                <a className="social-list__link github"
                href="https://github.com/vladimirkostroba" 
                target="blank"><p></p></a>
            </li>

            <li className="social-list__item">
                <a className="social-list__link whatsap"
                href="https://wa.me/+4915738404740" 
                target="blank"><p></p></a>               
            </li>

            <li className="social-list__item">
                <a className="social-list__link email"
                href="mailto:volodymrkostroba@gmail.com" 
                target="blank"><p></p></a>
            </li>

            
        </ul>
    )
}