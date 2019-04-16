import React from 'react';

const Card = ({ name, founded, seats, titles, coatOfArms, ancestralWeapons, words }) => {
  return (
    <div className="Card">
      <div className="Card-Row">
        <label>Name:</label>
        <h4>{name}</h4>
      </div>
      <div className="Card-Row">
        <label>Founded:</label>
        <h4>{founded}</h4>
      </div>
      <div className="Card-Row">
        <label>Seats:</label>
        <h4>{seats}</h4>
      </div>
      <div className="Card-Row">
        <label>Titles:</label>
        <h4>{titles}</h4>
      </div>
      <div className="Card-Row">
        <label>Coat Of Arms:</label>
        <h4>{coatOfArms}</h4>
      </div>
      <div className="Card-Row">
        <label>Ancestral Weapons:</label>
        <h4>{ancestralWeapons}</h4>
      </div>
      <div className="Card-Row">
        <label>Word:</label>
        <h4>{words}</h4>
      </div>
    </div>
  )
}

export default Card;
