import React, { Component } from "react";
import BeyCard from '../Components/BeyCard'
import beyArray from '../api'

export default class Favorites extends Component {  
  renderCard = () => {
    if (this.props.beyCard.favorite === true){
      return <BeyCard {...this.props.beyCard}/>
    }
  }
  render() {
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        <div className="card">
          {this.renderCard()}
        </div>
      </div>
    );
  }
}
