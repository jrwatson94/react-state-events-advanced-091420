import React from "react";
import BeyCard from '../Components/BeyCard'
import beyArray from '../api'


class BeyContainer extends React.Component {
  renderData = () =>{ 
    return beyArray.map(beyObj => <BeyCard appClickHandler = {this.props.appClickHandler} beyCard = {beyObj} key={beyObj.id} name={beyObj.name} img={beyObj.img} favorite = {beyObj.favorite}/> )
  }
  //  {...beyArray}  /> )
  
  render() {
    return (
      <div className="index">
        <h1>Index</h1>
        <div className="card">
          {this.renderData()}
        </div>
      </div>
    );
  }
}

export default BeyContainer;
