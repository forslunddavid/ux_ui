import { useState } from "react"
import Header from "./components/header"
import Nav from "./components/nav"
import Movies from "./components/movies"
import CircleDiagramLanguage from "./components/circlediagram_language"
import "./App.css"
import LineDiagramLength from "./components/linediagram_length"
import BardiagramMonth from "./components/bardiagram_months"
import CirclediagramGenre from "./components/circlediagram_genres"
import MoviesBySearch from "./components/search"

function App() {
	const [showMovies, setShowMovies] = useState(true)
	const [showSearch, setShowSearch] = useState(false)

	return (
		<>
			<Header></Header>
			<Nav setShowMovies={setShowMovies} setShowSearch={setShowSearch} />

			{showMovies && <Movies />}

			{showSearch && <MoviesBySearch />}

			{!showMovies && !showSearch && (
				<>
					<CircleDiagramLanguage />
					<LineDiagramLength />
					<BardiagramMonth />
					<CirclediagramGenre />
				</>
			)}
			<h2></h2>
		</>
	)
}

export default App
