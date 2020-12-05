import React from 'react'
import './card.css'

export default function Card(props) {
    return ( 
        <div className="card"> 
            <img className="image" alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2`} />
            <h2>{props.monster.name}</h2> 
            <p>{props.monster.email}</p>
        </div>
    )
}
