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
      lisaList: [],
      lennyList: []
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
    console.log("THIS STATE: ", this.state)
  }

  //DONT FORGET TO REMOVE EPISODE ONCE YOU RATE IT
  updateRating = (rating) => {
    const myEpisode = this.state.currentEpisode
    myEpisode.myRating = rating

    if (rating === 'krusty') {
      this.setState({
        currentEpisode: myEpisode,
        krustyList: [...this.state.krustyList, this.state.currentEpisode]
      })
    }
    else if (rating === 'lisa') {
      this.setState({
        currentEpisode: myEpisode,
        lisaList: [...this.state.lisaList, this.state.currentEpisode]
      })
    }
    else if (rating === 'lenny') {
      this.setState({ 
        currentEpisode: myEpisode,
        lennyList: [...this.state.lennyList, this.state.currentEpisode] 
      })
    }
  }

  setCurrentEpisode = (id) => {
    console.log("Episode id selected: ", id)
    const foundEpisode = this.state.episodes.find(episode => {
      return episode.id === id
    })
    console.log("Episode selected: ", foundEpisode)
    this.setState({ currentEpisode: foundEpisode })
  }

  render() {
    return (
      <main className="app">
        <Banner />
        <Switch>
          <Route exact path='/' render={() => {
            return <div>
              <RankResult krustyList={this.state.krustyList} lisaList={this.state.lisaList} lennyList={this.state.lennyList}/>
              <EpisodeBank episodes={this.state.episodes} setCurrentEpisode={this.setCurrentEpisode} />
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