import React, { Component } from 'react';
import FilmRow from './FilmRow.js';

class FilmList extends Component {
	render() {
		const allFilms = this.props.films.map( films =>{
			return (
				<FilmRow handleClick={this.props.onDetails} title={films.title} key={films.id} posterUrl={films.poster_path} year={films.release_date} />
			);
		})
		return (
			<div className="FilmList">
				<div className="film-list">
					<h1 className="section-title">FILMS</h1>
					{allFilms}
				</div>
			</div>
		);
	}
}

export default FilmList;