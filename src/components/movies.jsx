import React from "react"
import documentariesData from "../data/documentaries.json"
import featureFilmsData from "../data/feature-films.json"
import specialsData from "../data/specials.json"

function Movies() {
	const allMovies = [
		...documentariesData,
		...featureFilmsData,
		...specialsData,
	]

	return (
		<div>
			<h1>All Movies</h1>
			<ul>
				{allMovies.map((movie, index) => (
					<li key={index}>
						<h3>{movie.Title}</h3>
						<p>Genre: {movie.Genre}</p>
						<p>Premiere: {movie.Premiere}</p>
						<p>Runtime: {movie.Runtime}</p>
						<p>Language: {movie.Language}</p>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Movies
