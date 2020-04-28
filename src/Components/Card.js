
import React from 'react';
import {FaPencilAlt} from 'react-icons/fa'
const Card = props => {
  return (
   
    <div onClick={() => props.openModal(props.cards)} className='cardDiv'>
      <h6 className='cardName'>{props.cards.name}</h6>
      <div>
      
        {/* <button
          onClick={event => props.deleteCard(event, props.cards.id)}
          className='deleteButton btn btn-xsm'>
          <FaPencilAlt />
        </button> */}
        <button
          onClick={(event) => props.updateCard(props.cards.id,event)}
          className='deleteButton btn btn-xsm'>
          <FaPencilAlt />
        </button>
      </div>
    </div>
        
  );
};
export default Card;
