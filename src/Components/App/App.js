import React from "react";
import { Component } from "react";
import './App.css'
import Banner from '../Banner/Banner'

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
        <Banner />
      </main>
    )
  }
}

export default App