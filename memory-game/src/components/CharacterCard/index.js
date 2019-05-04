import React from 'react'
import './style.css'


function CharacterCard(props) {
    return (
        <div onClick={props.onClick} className="character-card">
            <img alt={props.name} src={props.image} />
        </div> 
    )
}

export default CharacterCard