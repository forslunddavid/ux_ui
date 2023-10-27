// import data from "./documentaries.json"
// import data from "./feature-films.json"
// import data from "./specials.json"

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

export function getAllLanguagesConfig(
	documentaries,
	specials,
	featureFilms,
	sortByCount
) {
	const allData = [...documentaries, ...specials, ...featureFilms]
	const languageCounter = {}

	allData.forEach((movie) => {
		const language = movie.Language
		if (languageCounter[language]) {
			languageCounter[language]++
		} else {
			languageCounter[language] = 1
		}
	})

	// Skapar en array med languageobjekt och count för sortering.
	const languageCounterArray = Object.entries(languageCounter).map(
		([language, count]) => ({
			language,
			count,
		})
	)

	// Sorterar språken baserat på sortByCount parametern.
	languageCounterArray.sort((a, b) => {
		if (sortByCount) {
			return b.count - a.count // Sort from most to least
		} else {
			return a.count - b.count // Sort from least to most
		}
	})

	const sortedLanguages = languageCounterArray.map((entry) => entry.language)
	const sortedCounts = languageCounterArray.map((entry) => entry.count)

	return {
		labels: sortedLanguages,
		datasets: [
			{
				label: "Documentaries by languages",
				data: sortedCounts,
				backgroundColor: colors,
				radius: "350",
				pointRadius: 5,
			},
		],
	}
}
