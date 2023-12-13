import React, { Component } from "react";
export default class Presentation extends Component {
 
 
  constructor(props){
    super(props)
    this.nom = "Rami";
    this.prenom = "Ahmed";
  }
  render(){
    return (
      <div>
        <h2>Hi -{this.nom} {this.prenom} </h2>
      </div>
    );
  }
}
