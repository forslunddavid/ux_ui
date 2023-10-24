import {
	Chart as ChartJS,
	ArcElement,
	Tooltip,
	Legend,
	BarElement,
	LinearScale,
	Title,
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

import { getSpecialsConfig } from "../data/getSpecials"
import { getFeatureFilmsConfig } from "../data/getFeatureFilms"
import { getDocumentariesConfig } from "../data/getDocumentaries"

const documentariesConfig = getDocumentariesConfig()
const featureFilmsConfig = getFeatureFilmsConfig()
const specialsConfig = getSpecialsConfig()

const CircleDiagramLanguage = () => {
	return (
		<section>
			<h2>Specials by Language</h2>
			<Pie data={specialsConfig} />
			<h2>Feature-Films by Language</h2>
			<Pie data={featureFilmsConfig} />
			<h2>Documentaries by Language</h2>
			<Pie data={documentariesConfig} />
		</section>
	)
}

export default CircleDiagramLanguage
