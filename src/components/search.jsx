import { useState } from "react"
import documentariesData from "../data/documentaries.json"
import featureFilmsData from "../data/feature-films.json"
import specialsData from "../data/specials.json"
import { motion } from "framer-motion"

const MoviesBySearch = () => {
	const [searchTerm, setSearchTerm] = useState("")
	const [searchResults, setSearchResults] = useState([])
	const [filteredMovies, setFilteredMovies] = useState([])

	const allData = [...documentariesData, ...specialsData, ...featureFilmsData]

	// Funktion för att hantera sökningen
	const handleSearch = () => {
		const filteredMovies = allData.filter((movie) =>
			movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
		)
		setSearchResults(filteredMovies)
		setFilteredMovies(filteredMovies)
	}

	// Funktion som hanterar ändringar i sökfältet
	const handleChange = (e) => {
		setSearchTerm(e.target.value)
		handleSearch()
	}

	return (
		<div>
			<div className="search-section">
				<motion.input
					whileHover={{
						scale: 1.1,
						transition: { duration: 0.2 },
					}}
					className="search-bar"
					type="text"
					placeholder="Sök efter filmer"
					value={searchTerm}
					onChange={handleChange}
				/>
			</div>
			<div className="search-results">
				{filteredMovies.length === 1 ? (
					<>
						{/* Visa detaljer om en enskild film om bara en träff finns */}
						<div className=".movie-single-result-container ">
							<div className="movie-single-result">
								<li>Title: {filteredMovies[0].Title}</li>
								<li>Duration: {filteredMovies[0].Runtime}</li>
								<li>Released: {filteredMovies[0].Premiere}</li>
								<li>Language: {filteredMovies[0].Language}</li>
							</div>
						</div>
					</>
				) : (
					<ul>
						{/* Visa en lista av filmer om det finns flera träffar */}
						{searchTerm !== "" &&
							searchResults.map((movie) => (
								<li className="movie" key={movie.Title}>
									{movie.Title}
								</li>
							))}
					</ul>
				)}
			</div>
		</div>
	)
}

export default MoviesBySearch
