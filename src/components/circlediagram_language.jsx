import {
	Chart as ChartJS,
	ArcElement,
	Tooltip,
	Legend,
	BarElement,
	LinearScale,
	CategoryScale,
} from "chart.js"
ChartJS.register(
	ArcElement,
	BarElement,
	LinearScale,
	CategoryScale,
	Tooltip,
	Legend
)
import { Pie } from "react-chartjs-2"

import documentariesData from "../data/documentaries.json"
import specialsData from "../data/specials.json"
import featureData from "../data/feature-films.json"

// import { getSpecialsConfig } from "../data/getSpecials"
// import { getFeatureFilmsConfig } from "../data/getFeatureFilms"
// import { getDocumentariesConfig } from "../data/getDocumentaries"
import { getAllLanguagesConfig } from "../data/getAllLanguage"
import "../App.css"

// const documentariesConfig = getDocumentariesConfig()
// const featureFilmsConfig = getFeatureFilmsConfig()
// const specialsConfig = getSpecialsConfig()

const CircleDiagramLanguage = () => {
	const allLanguagesConfig = getAllLanguagesConfig(
		documentariesData,
		specialsData,
		featureData
	)
	return (
		<section>
			<div className="card">
				<h2>Språk alla Filmer</h2>
				<Pie data={allLanguagesConfig}></Pie>
			</div>
			{/* <div className="card">
				<h2>Språk Specials</h2>
				<Pie data={specialsConfig} />
			</div>
			<div className="card">
				<h2>Språk Filmer</h2>
				<Pie data={featureFilmsConfig} />
			</div>
			<div className="card">
				<h2>Språk Dokumentärer</h2>
				<Pie data={documentariesConfig} />
			</div> */}
		</section>
	)
}

export default CircleDiagramLanguage
