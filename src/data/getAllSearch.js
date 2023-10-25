export function searchConfig(
	documentaries,
	specials,
	featureFilms,
	searchTerm
) {
	const allData = [...documentaries, ...specials, ...featureFilms]

	const searchMovies = allData.filter((movie) =>
		movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
	)

	return searchMovies
}
