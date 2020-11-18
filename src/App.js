import React from "react";
import "./App.css";
import BeyContainer from "./Containers/BeyContainer"
import Favorites from "./Containers/Favorites"

class App extends React.Component{
  state = {
    beyCard: {}
  }
  appClickHandler = (beyObj) => {
    this.setState({beyCard: beyObj})
    // if (card.state.favorite===false){
    //   card.setState({"favorite": true})
    // }else{
    //   card.setState({"favorite": false})
    // }
    // this.setState({beyCard: card})
  }
  render(){
    return (
      <div className="container" >
        <BeyContainer appClickHandler = {this.appClickHandler}/>
        <Favorites beyCard= {this.state.beyCard}/>
  
      </div>
    )
  }
};

export default App;
