import React, { Component } from 'react';
export default class Header extends Component {

    
    constructor(props){
        super(props)
        this.titre="Application mon premier class composant"
    }

    render(){
        return (
            <div>
                <h1>{this.titre}</h1>
                <hr/>
            </div>
        )
    }
}