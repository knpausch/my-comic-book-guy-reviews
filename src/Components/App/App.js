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
      episodes: []
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

  render() {
    return (
      <main>
        <Banner />
        <Switch>
          <Route exact path='/' render={() => {
            return <div>
              <RankResult />
              <EpisodeBank />
            </div>
          }} />
          <Route exact path="/episodeDetails" render={() => {
            return <div>
              <EpisodeDetail />
              <RankInterface />
            </div>
          }} />
        </Switch>
      </main>
    )
  }
}

export default App