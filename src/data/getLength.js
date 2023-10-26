export function getLengthConfig(documentaries, specials, featureFilms) {
	const allData = [...documentaries, ...specials, ...featureFilms]

	// Konvertera längden till minuter för varje film
	allData.forEach((movie) => {
		const duration = movie.Runtime
		const parts = duration.split(" ")
		let totalMinutes = 0

		for (let i = 0; i < parts.length; i++) {
			if (parts[i] === "h") {
				const hours = parseInt(parts[i - 1])
				totalMinutes += hours * 60
			} else if (parts[i] === "min") {
				const minutes = parseInt(parts[i - 1])
				totalMinutes += minutes
			}
		}

		movie.DurationInMinutes = totalMinutes
	})

	allData.sort((a, b) => a.DurationInMinutes - b.DurationInMinutes)

	// Räkna antal filmer per längd
	const runtimeCount = {}
	const documentariesRuntimeCount = {}
	const featureFilmRuntimeCount = {}
	const specialRuntimeCount = {}

	allData.forEach((movie) => {
		const runtime = movie.Runtime
		runtimeCount[runtime] = (runtimeCount[runtime] || 0) + 1
	})

	documentaries.forEach((movie) => {
		const documentariesRuntime = movie.Runtime
		documentariesRuntimeCount[documentariesRuntime] =
			(documentariesRuntimeCount[documentariesRuntime] || 0) + 1
	})

	featureFilms.forEach((movie) => {
		const featureFilmRuntime = movie.Runtime
		featureFilmRuntimeCount[featureFilmRuntime] =
			(featureFilmRuntimeCount[featureFilmRuntime] || 0) + 1
	})

	specials.forEach((movie) => {
		const specialRuntime = movie.Runtime
		specialRuntimeCount[specialRuntime] =
			(specialRuntimeCount[specialRuntime] || 0) + 1
	})

	const uniqueRuntime = Object.keys(runtimeCount)
	const runtimeCountsArray = uniqueRuntime.map(
		(runtime) => runtimeCount[runtime]
	)

	const uniqueDocumentaryRuntime = Object.keys(documentariesRuntimeCount)
	const documentariesRuntimeCountsArray = uniqueDocumentaryRuntime.map(
		(documentariesRuntime) =>
			documentariesRuntimeCount[documentariesRuntime]
	)

	const uniqueFeatureFilmRuntime = Object.keys(featureFilmRuntimeCount)
	const featureFilmsRuntimeCountsArray = uniqueFeatureFilmRuntime.map(
		(featureFilmRuntime) => featureFilmRuntimeCount[featureFilmRuntime]
	)

	const uniqueSpecialRuntime = Object.keys(specialRuntimeCount)
	const specialRuntimeCountsArray = uniqueSpecialRuntime.map(
		(specialRuntime) => specialRuntimeCount[specialRuntime]
	)

	return {
		labels: uniqueRuntime,
		datasets: [
			{
				label: "All movies by runtime",
				data: runtimeCountsArray,
				backgroundColor: "#a7c957",
				borderColor: "#779443",
				lineTension: 0.8,
				hitRadius: 30,
				hoverRadius: 8,
			},
			{
				label: "Documentaries by runtime",
				data: documentariesRuntimeCountsArray,
				backgroundColor: "#57a0d2",
				borderColor: "#4176a9",
				pointRadius: 2,
				borderWidth: 2,
				lineTension: 0.8,
				hitRadius: 30,
				hoverRadius: 8,
			},
			{
				label: "Features by runtime",
				data: featureFilmsRuntimeCountsArray,
				backgroundColor: "#e56b6f",
				borderColor: "#d63d44",
				pointRadius: 2,
				borderWidth: 2,
				lineTension: 0.8,
				hitRadius: 30,
				hoverRadius: 8,
			},
			{
				label: "Specials by runtime",
				data: specialRuntimeCountsArray,
				backgroundColor: "#ef9a9a",
				borderColor: "#e66a6a",
				pointRadius: 2,
				borderWidth: 2,
				lineTension: 0.8,
				hitRadius: 30,
				hoverRadius: 8,
			},
		],
	}
}
