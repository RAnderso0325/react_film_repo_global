import React, { Component } from 'react';
import FilmPoster from './FilmPoster.js';

class FilmRow extends Component {
	render() {
		const posterStub = "https://image.tmdb.org/t/p/w780";
		let year = new Date(this.props.year);
		return (
			<div className="FilmRow">
				<div className="film-row">
  					<FilmPoster posterUrl={this.props.posterUrl} title={this.props.title} />
    				<h1>{this.props.title}</h1>
    				<p>{year.getFullYear()}</p>
					<input type="button" value="Details" onClick={this.props.handleClick} ref={this.props.key} /> 
				</div>
			</div>
		);
	}
}

export default FilmRow;