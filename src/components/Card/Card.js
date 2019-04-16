import React from 'react';

const Card = ({ name, founded, seats, titles, coatOfArms, ancestralWeapons, words }) => {
  return (
    <div className="Card">
      <div className="Card-Row">
        <h1>{name}</h1>
      </div>
      <div className="Card-Row">
        <h3><span>Founded</span> {founded ? founded : 'N/A'}</h3>
      </div>
      <div className="Card-Row">
        <h4><span>Seats:</span> {seats}</h4>
      </div>
      <div className="Card-Row">
        <h4><span>Titles:</span> {titles}</h4>
      </div>
      <div className="Card-Row">
        <h4><span>Coat Of Arms:</span> {coatOfArms}</h4>
      </div>
      <div className="Card-Row">
        <h4><span>Ancestral Weapons:</span> {ancestralWeapons}</h4>
      </div>
      <div className="Card-Row">
        {
          words &&
          <h4><span>Words:</span> {words}</h4>
        }
      </div>
    </div>
  )
}

export default Card;
