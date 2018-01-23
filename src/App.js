import React, { Component } from 'react';
import logo from './logo.svg';
import FilmList from './FilmListing.js';
import FilmDetail from './FilmDetails.js';
import TMDB from './TMDB.js';
import './App.css';
import dotenv from 'dotenv';
dotenv.config();

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      childData: ''
    }
    this.handleDetailsClick = this.handleDetailsClick.bind(this);
  }

  handleDetailsClick = (childData, e) => {
    e.preventDefault();
    if(this.refs.value){
      const url = 'https://api.themoviedb.org/3/movie/${childData}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en';
      this.setState({childData: this.refs.value});
      fetch(url).then(response => {
        response.json().then(data => {
        console.log(data) // take a look at what you get back!
        })
      })
    }
    
  }
  
  render() {
    return (
      <div className="App">
        <div className="film-library">
          <FilmList onDetails={this.handleDetailsClick} films={TMDB.films} />
          <FilmDetail films={TMDB.films} />
        </div>
      </div>
    );
  }
}

export default App;
