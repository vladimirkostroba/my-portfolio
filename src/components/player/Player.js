import React from "react";
import ReactPlayer from "react-player";
import './Player.css'

export default function Player({link}){
    return(
        <div className="player-overlay">
            <ReactPlayer url={link} controls width='100%' height='100%'/>
        </div>
    )

}