import React from 'react';
import './card-list.components.css';
import { Card } from '../cards/cards.components';
 export const CardList = (props)=>
  (
 // eslint-disable-next-line no-unused-expressions
    <div className='card-list'>
        {props.monsters.map(monster => (
        <Card email = {monster.email} monster={monster.name}/>
        ) )}
         

    </div>);

