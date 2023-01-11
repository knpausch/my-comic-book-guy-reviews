import React from "react";
import { Component } from "react";
import './App.css'
import Banner from '../Banner/Banner'
import RankResult from "../RankResult/RankResult";
import EpisodeBank from "../EpisodeBank/EpisodeBank";
import EpisodeDetail from "../EpisodeDetail/EpisodeDetail";
import RankInterface from "../RankInterface/RankInterface";

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
        {/* <RankResult />
        <EpisodeBank /> */}
        <EpisodeDetail />
        <RankInterface />
      </main>
    )
  }
}

{/* <Switch>
  <Route exact path="/" render={() => {
    return this.state.error ? <h2>{this.state.error}</h2> :
      <div>
        <RatingFilter filterByRating={this.filterByRating} />
        <Movies movies={this.state.filteredMovies} loading={this.state.loading} seeMovieDetails={this.seeMovieDetails} />
      </div>
  }} />
  <Route exact path="/movie/:id" render={() => {
    return this.state.error ? <h2>{this.state.error}</h2> :
      <MovieDetails singleMovie={this.state.singleMovie} displayHome={this.displayHome} />
  }} />
  <Route component={Status404} />
</Switch> */}

export default App