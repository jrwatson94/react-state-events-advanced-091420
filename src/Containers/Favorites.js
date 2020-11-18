import React, { Component } from "react";
import BeyCard from '../Components/BeyCard'

export default class Favorites extends Component {  
  renderCard = () => {
    console.log(this.props.favorites)
    // this.props.favorites.map(beyObj => <BeyCard appClickHandler = {this.props.appClickHandler} beyCard = {beyObj} key={beyObj.id} name={beyObj.name} img={beyObj.img} favorite = {beyObj.favorite}/>)
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
