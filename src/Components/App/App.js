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
      currentEpisode: {},
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
    console.log("Episode after rating: ", this.state.currentEpisode)
  }

  updateRating = (rating) => {
    // const foundEpisode = this.state.episodes.find(episode => {
    //   return episode.id === id
    // })
    // foundEpisode.myRating = rating

    this.setState({currentEpisode: {...this.state.currentEpisode, myRating: rating}})
    // this.state.currentEpisode.myRating = rating
    // console.log("Episode after rating: ", this.state.currentEpisode)
  }

  setCurrentEpisode = (id) => {
    console.log("Episode id selected: ", id)
      const foundEpisode = this.state.episodes.find(episode => {
        return episode.id === id
    })
    console.log("Episode selected: ", foundEpisode)
    this.setState({currentEpisode: foundEpisode})
  }

  render() {
    return (
      <main className="app">
        <Banner />
        <Switch>
          <Route exact path='/' render={() => {
            return <div>
              <RankResult krustyList={this.state.krustyList} />
              <EpisodeBank episodes={this.state.episodes} setCurrentEpisode={this.setCurrentEpisode}/>
            </div>
          }} />
          <Route exact path="/episodeDetails/:id" render={() => {
            return <div>
              <EpisodeDetail currentEpisode={this.state.currentEpisode} />
              <RankInterface updateRating={this.updateRating} />
            </div>
          }} />
        </Switch>
      </main>
    )
  }
}

export default App