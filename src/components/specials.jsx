import specialsData from "../data/specials.json"

function Specials() {
	const specials = [...specialsData]

	return (
		<>
			<div>
				<h2>Specials</h2>
				<ul className="moviecontainer">
					{specials.map((movie, index) => (
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

export default Specials
