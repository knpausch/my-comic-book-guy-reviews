import React from "react";
import { Component } from "react";
import './App.css'

class App extends Component{
  constructor(){
    super()
    this.state={
      episodes: []
    }
  }

  render(){
    return(
      <main>
        <h1>My Comic Book Guy Reviews</h1>
      </main>
    )
  }
}

export default App