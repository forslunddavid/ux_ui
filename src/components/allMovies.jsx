import documentariesData from "../data/documentaries.json"
import featureFilmsData from "../data/feature-films.json"
import specialsData from "../data/specials.json"

function AllMovies() {
	const allMovies = [
		...documentariesData,
		...featureFilmsData,
		...specialsData,
	]

	return (
		<>
			<div>
				<h1>Alla Filmer</h1>
				<ul className="moviecontainer">
					{allMovies.map((movie, index) => (
						<li className="movie" key={index}>
							<h3>{movie.Title}</h3>
							<p>Genre: {movie.Genre}</p>
							<p>Premiär: {movie.Premiere}</p>
							<p>Speltid: {movie.Runtime}</p>
							<p>Språk: {movie.Language}</p>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}

export default AllMovies
