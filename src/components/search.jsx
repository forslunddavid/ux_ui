import { useState } from "react"
import documentariesData from "../data/documentaries.json"
import featureFilmsData from "../data/feature-films.json"
import specialsData from "../data/specials.json"

const MoviesBySearch = () => {
	const [searchTerm, setSearchTerm] = useState("")
	const [searchResults, setSearchResults] = useState([])
	const [filteredMovies, setFilteredMovies] = useState([])

	const allData = [...documentariesData, ...specialsData, ...featureFilmsData]

	const handleSearch = () => {
		const filteredMovies = allData.filter((movie) =>
			movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
		)
		setSearchResults(filteredMovies)
		setFilteredMovies(filteredMovies)
	}

	const handleChange = (e) => {
		setSearchTerm(e.target.value)
		handleSearch()
	}

	return (
		<div>
			<section>
				<input
					type="text"
					placeholder="Sök efter filmer"
					value={searchTerm}
					onChange={handleChange}
				/>

				{filteredMovies.length === 1 ? (
					<>
						<li>Title: {filteredMovies[0].Title}</li>
						<li>Duration: {filteredMovies[0].Runtime}</li>
						<li>Released: {filteredMovies[0].Premiere}</li>
						<li>Language: {filteredMovies[0].Language}</li>
					</>
				) : (
					<ul>
						{searchTerm !== "" &&
							searchResults.map((movie) => (
								<li className="movie" key={movie.Title}>
									{movie.Title}
								</li>
							))}
					</ul>
				)}
			</section>
		</div>
	)
}

export default MoviesBySearch
