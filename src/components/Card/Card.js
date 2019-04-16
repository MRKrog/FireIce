import React, { Component } from 'react';
import { combineMembers } from '../../utility/fetchSworn'

class Card extends Component {
  constructor() {
    super()
    this.state = {
      members: []
    }
  }

  handleClick = (e) => {
    e.preventDefault()
    this.retrieveMembers()
  }

  retrieveMembers = async () => {
    const { swornMembers } = this.props;
    const found = await combineMembers(swornMembers)
    this.setState({ members: found })
  }

  render() {
    const { name, founded, seats, titles, coatOfArms, ancestralWeapons, words } = this.props;
    const { members } = this.state;
    let displayMembers;
    if(members.length > 0) {
      displayMembers = members.map((member, index) => {
        return <li key={index}>{member}</li>
      })
    }
    return (
      <div className="Card" onClick={this.handleClick}>
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
        <div className="Card-Row">
        {
          members.length > 0 &&
          <h4>
            <span>Members:</span>
            <ul>{displayMembers}</ul>
          </h4>
        }
        </div>
      </div>
    )
  }
}

export default Card;
