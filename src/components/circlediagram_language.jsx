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

import { getSpecialsConfig } from "../data/getSpecials"
import { getFeatureFilmsConfig } from "../data/getFeatureFilms"
import { getDocumentariesConfig } from "../data/getDocumentaries"

const documentariesConfig = getDocumentariesConfig()
const featureFilmsConfig = getFeatureFilmsConfig()
const specialsConfig = getSpecialsConfig()

const CircleDiagramLanguage = () => {
	return (
		<section>
			<h2>Språk alla Filmer</h2>
			{/* <Pie data={}></Pie> */}
			<h2>Språk Specials</h2>
			<Pie data={specialsConfig} />
			<h2>Språk Filmer</h2>
			<Pie data={featureFilmsConfig} />
			<h2>Språk Dokumentärer</h2>
			<Pie data={documentariesConfig} />
		</section>
	)
}

export default CircleDiagramLanguage
