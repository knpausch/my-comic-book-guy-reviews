import React from "react";
import { Component } from "react";
import './App.css'
import Banner from '../Banner/Banner'
import RankResult from "../RankResult/RankResult";
import EpisodeBank from "../EpisodeBank/EpisodeBank";

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
        <RankResult />
        <EpisodeBank />
      </main>
    )
  }
}

export default App