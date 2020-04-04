import React from 'react';
import './cards.components.css'
export const Card = props =>(
    <div className="card-container"> {console.log(props)}
        <img alt='monsters' src={`https://robohash.org/${props.monster}?set=set2&size=108x180`} />
        <h1>{props.monster}</h1>
        <h2>{props.email}</h2>     
    </div>);

