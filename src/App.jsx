import { useState } from "react"
import Header from "./components/header"
import Nav from "./components/nav"
import AllMovies from "./components/allMovies"
import CircleDiagramLanguage from "./components/circlediagram_language"
import "./App.css"
import LineDiagramLength from "./components/linediagram_length"
import BardiagramMonth from "./components/bardiagram_months"
import CirclediagramGenre from "./components/circlediagram_genres"
import MoviesBySearch from "./components/search"
import FeatureFilms from "./components/movies"
import Documentaries from "./components/documentaries"
import Specials from "./components/specials"

function App() {
	const [selectedCategory, setSelectedCategory] = useState("all")
	return (
		<>
			<Header></Header>
			<>
				<Nav onCategoryChange={setSelectedCategory} />
				{selectedCategory === "search" && <MoviesBySearch />}

				{selectedCategory === "all" && <AllMovies />}

				{selectedCategory === "documentaries" && <Documentaries />}

				{selectedCategory === "movies" && <FeatureFilms />}

				{selectedCategory === "specials" && <Specials />}

				<>
					{selectedCategory === "language" && (
						<CircleDiagramLanguage />
					)}
					{selectedCategory === "length" && <LineDiagramLength />}
					{selectedCategory === "month" && <BardiagramMonth />}
					{selectedCategory === "genre" && <CirclediagramGenre />}
				</>
			</>
		</>
	)
}

export default App
