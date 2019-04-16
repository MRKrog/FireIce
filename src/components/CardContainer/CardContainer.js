import React from 'react';
import Card from '../Card/Card';

const CardContainer = ({ people }) => {

  let allCards = people.map((person, index) => <Card key={index} {...person} />)

  return (
    <div className="CardContainer">
      {allCards}
    </div>
  )

}

export default CardContainer;
