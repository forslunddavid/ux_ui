import featureFilmsData from "../data/feature-films.json"

function FeatureFilms() {
	const featureFilms = [...featureFilmsData]

	return (
		<>
			<div>
				<h1>Filmer</h1>
				<ul className="moviecontainer">
					{featureFilms.map((movie, index) => (
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

export default FeatureFilms
