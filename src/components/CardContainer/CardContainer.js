import React from 'react';
import Card from '../Card/Card';

const CardContainer = ({ houses }) => {

  let allCards = houses.map((house, index) => <Card key={index} {...house} />)

  return (
    <div className="CardContainer">
      {allCards}
    </div>
  )

}

export default CardContainer;
