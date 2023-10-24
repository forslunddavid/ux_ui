import { useState } from "react"
import Header from "./components/header"
import Nav from "./components/nav"
import Movies from "./components/movies"
import CircleDiagramLanguage from "./components/circlediagram_language"
import "./App.css"
import LineDiagramLength from "./components/linediagram_length"
import BardiagramMonth from "./components/bardiagram_months"
import CirclediagramGenre from "./components/circlediagram_genres"

function App() {
	const [showMovies, setShowMovies] = useState(true)

	return (
		<>
			<Header></Header>
			<Nav setShowMovies={setShowMovies} />
			{showMovies ? (
				<Movies />
			) : (
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
