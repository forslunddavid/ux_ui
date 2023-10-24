const colors = [
	"#D7263D",
	"#F46036",
	"#2E294E",
	"#1B998B",
	"#C5D86D",
	"#F5F6CE",
	"#35477D",
	"#6C8893",
	"#FF6F61",
	"#F7D560",
	"#683257",
	"#86A8E7",
	"#DAF7A6",
	"#FFC09F",
	"#9BC1BC",
	"#FFAA1D",
	"#FF919D",
	"#B5EAD7",
	"#CCC6A4",
	"#41584B",
]

export function getGenreConfig(documentaries, specials, featureFilms) {
	const allData = [...documentaries, ...specials, ...featureFilms]

	const genres = {}

	allData.forEach((movie) => {
		let genre = movie.Genre
		if (!genre) {
			genre = "Documentary"
		}

		if (genres[genre]) {
			genres[genre]++
		} else {
			genres[genre] = 1
		}
	})

	const genreCountArray = Object.entries(genres).map(([genre, count]) => ({
		genre,
		count,
	}))

	const labels = genreCountArray.map((item) => item.genre)
	const data = genreCountArray.map((item) => item.count)

	return {
		labels: labels,
		datasets: [
			{
				label: "Genrer",
				data: data,
				backgroundColor: colors,
			},
		],
	}
}
