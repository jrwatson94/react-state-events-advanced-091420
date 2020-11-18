import React from "react";



class BeyCard extends React.Component {

  state={
      "favorite": false
  }


  clickHandler = () => {
    console.log(this.props.beyCard)
    this.props.appClickHandler(this.props.beyCard)
  }

  render = () => {
    return(
    <div className="card" onClick={this.clickHandler} >
      <h2>{this.props.name}</h2>
      <img alt="the queen" src={this.props.img}></img>
    </div>
    )}
}


export default BeyCard;


// const BeyCard = (props) => {
//   return (
//     <div className="card">
//       <h2>{props.name}</h2>
//       <img alt="the queen" src={props.img}></img>

//     </div>
//   );
// };