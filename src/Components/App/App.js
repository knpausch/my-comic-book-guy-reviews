import React from "react";
import { Component } from "react";
import './App.css'
import Banner from '../Banner/Banner'
import RankResult from "../RankResult/RankResult";
import EpisodeBank from "../EpisodeBank/EpisodeBank";
import EpisodeDetail from "../EpisodeDetail/EpisodeDetail";
import RankInterface from "../RankInterface/RankInterface";
import { Route, Switch } from 'react-router-dom'
import { response } from "../../apiCalls";
import { cleanData } from "../../cleanData";

class App extends Component {
  constructor() {
    super()
    this.state = {
      episodes: [],
      krustyList: [],
      LisaList: [],
      LennyList: []
    }
  }

  getData = () => {
    response.then(data => {
      this.setState({ episodes: cleanData(data) })
      return
    })
  }

  componentDidMount = () => {
    this.getData()
  }

  //remove when done experiementing
  componentDidUpdate = () => {
    console.log("YO: ",this.state.episodes)
  }

  render() {
    return (
      <main className="app">
        <Banner />
        <Switch>
          <Route exact path='/' render={() => {
            return <div>
              <RankResult krustyList={this.state.krustyList}/>
              <EpisodeBank episodes={this.state.episodes}/>
            </div>
          }} />
          <Route exact path="/episodeDetails/:id" render={() => {
            return <div>
              <EpisodeDetail episodes={this.state.episodes}/>
              <RankInterface />
            </div>
          }} />
        </Switch>
      </main>
    )
  }
}

export default App