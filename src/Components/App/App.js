import React from "react";
import { Component } from "react";
import './App.css'
import Banner from '../Banner/Banner'
import RankResult from "../RankResult/RankResult";
import EpisodeBank from "../EpisodeBank/EpisodeBank";
import EpisodeDetail from "../EpisodeDetail/EpisodeDetail";
import RankInterface from "../RankInterface/RankInterface";
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      episodes: []
    }
  }

  render() {
    return (
      <main>
        <Banner />
        {/* <Switch> */}
          <Route exact path='/' render={() => {
            return <div>
              <RankResult />
              <EpisodeBank />
            </div>
          }} />
        {/* </Switch> */}

        {/* <Switch>
          <Route exact path="/" render={() => {
            <div>
              <RankResult />
              <EpisodeBank />
            </div>
            return
          }} />
          <Route exact path="/episodeDetails" render={() => {
            <div>
              <EpisodeDetail />
              <RankInterface />
            </div>
            return
          }} />
        </Switch> */}
      </main>
    )
  }
}

export default App