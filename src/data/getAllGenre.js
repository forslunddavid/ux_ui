const colors = [
	"#4F3674",
	"#D65076",
	"#FF9E9D",
	"#D0E3CC",
	"#799496",
	"#FEC568",
	"#E4D1C0",
	"#93648D",
	"#59C3C3",
	"#651E3E",
	"#CC6B32",
	"#882D17",
	"#3F4E4F",
	"#A3CEF1",
	"#1F2124",
	"#B2B8B1",
	"#5085A5",
	"#CDF0EA",
	"#F9F9F4",
	"#1B325F",
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
