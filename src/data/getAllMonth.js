export function getDocumentariesMonthConfig(documentaries) {
	return getMonthConfig(documentaries)
}

export function getSpecialsMonthConfig(specials) {
	return getMonthConfig(specials)
}

export function getFeatureFilmsMonthConfig(featureFilms) {
	return getMonthConfig(featureFilms)
}

function getMonthConfig(data) {
	const premiereMonth = Array(12).fill(0)

	data.forEach((movie) => {
		const premiere = new Date(movie.Premiere)
		const month = premiere.getMonth()
		premiereMonth[month]++
	})

	const uniqueMonths = Array.from({ length: 12 }, (_, i) => i)
	const monthsArray = premiereMonth

	return {
		labels: uniqueMonths.map((month) =>
			new Date(0, month).toLocaleString("default", { month: "short" })
		),
		datasets: [
			{
				label: "Releases",
				data: monthsArray,
				backgroundColor: "rgba(255, 99, 132, 0.6)",
			},
		],
	}
}
