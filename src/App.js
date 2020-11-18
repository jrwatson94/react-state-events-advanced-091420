import React from "react";
import "./App.css";
import BeyContainer from "./Containers/BeyContainer"
import Favorites from "./Containers/Favorites"
import beyArray from './api'

class App extends React.Component{
  state = {
    beyCard: {},
    api: beyArray,
    favorites: {}
  }

  favoritesArray = () => {
    this.state.api.filter(beyObj => beyObj.favorite)
  }

  appClickHandler = (beyObj) => {
    this.setState({beyCard: beyObj})
    console.log(beyObj)
    if (!beyObj.favorite){
      beyObj.favorite = true
    }else{
      beyObj.favorite = false
    }
    this.setState({favorites: this.favoritesArray()})

  }
  render(){
    return (
      <div className="container" >
        <BeyContainer appClickHandler = {this.appClickHandler}/>
        <Favorites appClickHandler= {this.appClickHandler} favorites={this.favoritesArray()}/>
      </div>
    )
  }
};
export default App;
