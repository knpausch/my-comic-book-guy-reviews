import React from 'react'
import { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { response } from '../../apiCalls'
import { cleanData } from '../../cleanData'
import Banner from '../Banner/Banner'
import RankResult from '../RankResult/RankResult'
import EpisodeBank from '../EpisodeBank/EpisodeBank'
import EpisodeDetail from '../EpisodeDetail/EpisodeDetail'
import RankInterface from '../RankInterface/RankInterface'
import PageNotFound from '../PageNotFound/PageNotFound'
import ServerDown from '../ServerDown/ServerDown'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      episodes: [],
      currentEpisode: {},
      krustyList: [],
      lisaList: [],
      lennyList: [],
      errorMessage: ''
    }
  }

  getData = () => {
    response
      .then(data => this.setState({ episodes: cleanData(data) }))
      .catch(error => this.setState({ errorMessage: 'D\'oh! Something went wrong. Please try again later' }))
  }

  componentDidMount = () => {
    this.getData()
  }

  updateRating = (rating) => {
    const myEpisode = this.state.currentEpisode
    myEpisode.myRating = rating

    const filteredList = this.state.episodes.filter(episode => {
      return episode.id !== this.state.currentEpisode.id
    })

    if (rating === 'krusty') {
      this.setState({
        currentEpisode: myEpisode,
        krustyList: [...this.state.krustyList, this.state.currentEpisode],
        episodes: filteredList
      })
    }
    else if (rating === 'lisa') {
      this.setState({
        currentEpisode: myEpisode,
        lisaList: [...this.state.lisaList, this.state.currentEpisode],
        episodes: filteredList
      })
    }
    else if (rating === 'lenny') {
      this.setState({
        currentEpisode: myEpisode,
        lennyList: [...this.state.lennyList, this.state.currentEpisode],
        episodes: filteredList
      })
    }
  }

  setCurrentEpisode = (id) => {
    const foundEpisode = this.state.episodes.find(episode => {
      return episode.id === id
    })
    this.setState({ currentEpisode: foundEpisode })
  }

  render() {
    return (
      <main className='app'>
        <Banner />
        <Switch>
          <Route exact path='/' render={() => {
            let errorMessageOrHomeView = this.state.errorMessage ? <ServerDown errorMessage={this.state.errorMessage} /> :
              (<div>
                <RankResult krustyList={this.state.krustyList} lisaList={this.state.lisaList} lennyList={this.state.lennyList} />
                <EpisodeBank episodes={this.state.episodes} setCurrentEpisode={this.setCurrentEpisode} />
              </div>)
            return errorMessageOrHomeView
          }} />
          <Route exact path='/episodeDetails/:id' render={() => {
            let errorMessageOrEpisodeDetailView = this.state.errorMessage ? <ServerDown errorMessage={this.state.errorMessage} /> :
              (<div>
                <EpisodeDetail currentEpisode={this.state.currentEpisode} />
                <RankInterface updateRating={this.updateRating} />
              </div>)
            return errorMessageOrEpisodeDetailView
          }} />
          <Route component={PageNotFound} />
        </Switch>
      </main>
    )
  }
}

export default App