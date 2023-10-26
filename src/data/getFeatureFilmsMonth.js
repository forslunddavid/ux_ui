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

export function getFeatureFilmsMonthConfig(featureFilms) {
	const allData = [...featureFilms]

	const premiereMonth = []

	// Loopa igenom alla filmer
	// Hämta premieredatum och månad
	// Öka countern för den månaden, eller sätt till 1 om ny månad.
	allData.forEach((movie) => {
		const premiere = new Date(movie.Premiere)
		const month = premiere.getMonth()
		if (premiereMonth[month]) {
			premiereMonth[month]++
		} else {
			premiereMonth[month] = 1
		}
	})

	// Mappa månader till antal filmer
	const uniqueMonth = Object.keys(premiereMonth).map((month) => Number(month))
	const monthsArray = uniqueMonth.map((month) => premiereMonth[month])

	// Returnera data för diagram
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
