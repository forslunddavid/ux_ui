export function searchConfig(
	documentaries,
	specials,
	featureFilms,
	searchTerm
) {
	// Slå ihop all data
	const allData = [...documentaries, ...specials, ...featureFilms]

	// Filtrera efter sökterm
	const searchMovies = allData.filter((movie) =>
		// Konvertera titel och sökterm till lowercase och kolla om det finns någon film som matchar söktermen
		movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
	)

	return searchMovies
}
