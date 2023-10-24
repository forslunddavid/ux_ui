import data from "./specials.json"

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

export function getSpecialsConfig() {
	const languageCounter = []

	data.forEach((movie) => {
		const language = movie.Language
		if (languageCounter[language]) {
			languageCounter[language]++
		} else {
			languageCounter[language] = 1
		}
	})

	const uniqueLanguages = Object.keys(languageCounter)
	const languageCounterArray = uniqueLanguages.map(
		(language) => languageCounter[language]
	)

	return {
		labels: uniqueLanguages,
		datasets: [
			{
				label: "Specials by languages",
				data: languageCounterArray,
				backgroundColor: colors,
				radius: "100",
				pointRadius: 5,
			},
		],
	}
}
