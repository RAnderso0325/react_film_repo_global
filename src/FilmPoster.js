import React, { Component } from 'react';

class FilmPoster extends Component {
	render() {
		const posterStub = "https://image.tmdb.org/t/p/w780";
		return (
			<img src={posterStub + this.props.posterUrl} alt="{this.props.title}" />
		);
	}
}

export default FilmPoster;