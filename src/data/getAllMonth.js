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

export function getMonthConfig(documentaries, specials, featureFilms) {
	const allData = [...documentaries, ...specials, ...featureFilms]
	const premiereMonth = {}

	// Loop through all movies
	allData.forEach((movie) => {
		const premiere = new Date(movie.Premiere)
		const month = premiere.getMonth()

		if (!premiereMonth[month]) {
			premiereMonth[month] = 1
		} else {
			premiereMonth[month]++
		}
	})

	// Extract unique months
	const uniqueMonths = Object.keys(premiereMonth).map(Number)
	const monthsArray = uniqueMonths.map((month) => premiereMonth[month])

	return {
		labels: uniqueMonths.map((month) =>
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

export function getMonthConfigWithTypes(
	documentaries,
	specials,
	featureFilms,
	colors
) {
	const allData = [...documentaries, ...specials, ...featureFilms]

	// Initialize data structures to store counts by month and type
	const premiereMonth = {}
	const movieTypes = {}

	// Loop through all movies
	allData.forEach((movie) => {
		const premiere = new Date(movie.Premiere)
		const month = premiere.getMonth()
		const type = movie.Type

		// Update counts by month
		if (!premiereMonth[month]) {
			premiereMonth[month] = {}
		}
		premiereMonth[month][type] = (premiereMonth[month][type] || 0) + 1

		// Track movie types
		if (!movieTypes[type]) {
			movieTypes[type] = true
		}
	})

	// Extract unique months and types
	const uniqueMonths = Object.keys(premiereMonth).map(Number)
	const uniqueTypes = Object.keys(movieTypes)

	// Create datasets for each movie type
	const datasets = uniqueTypes.map((type, index) => {
		const data = uniqueMonths.map(
			(month) => premiereMonth[month][type] || 0
		)
		return {
			label: type,
			data,
			backgroundColor: colors[index % colors.length],
		}
	})

	// Create labels for the unique months
	const labels = uniqueMonths.map((month) =>
		new Date(0, month).toLocaleString("default", { month: "short" })
	)

	return {
		labels,
		datasets,
	}
}
