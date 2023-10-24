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

export function getMonthConfig(documentaries, specials, featureFilms) {
	const allData = [...documentaries, ...specials, ...featureFilms]

	const premiereMonth = []

	allData.forEach((movie) => {
		const premiere = new Date(movie.Premiere)
		const month = premiere.getMonth()
		if (premiereMonth[month]) {
			premiereMonth[month]++
		} else {
			premiereMonth[month] = 1
		}
	})

	const uniqueMonth = Object.keys(premiereMonth).map((month) => Number(month))
	const monthsArray = uniqueMonth.map((month) => premiereMonth[month])

	return {
		labels: uniqueMonth.map((month) =>
			new Date(0, month).toLocaleString("default", { month: "short" })
		),
		datasets: [
			{
				label: "Premiärmånad",
				data: monthsArray,
				backgroundColor: colors,
			},
		],
	}
}
