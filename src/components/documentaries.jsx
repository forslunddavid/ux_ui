import documentariesData from "../data/documentaries.json"

function Documentaries() {
	const documentaries = [...documentariesData]

	return (
		<>
			<div>
				<h2>Dokumentärer</h2>
				<ul className="moviecontainer">
					{documentaries.map((movie, index) => (
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

export default Documentaries
