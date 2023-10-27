import {
	Chart as ChartJS,
	BarElement,
	Tooltip,
	Legend,
	LinearScale,
	CategoryScale,
} from "chart.js"
import { Bar } from "react-chartjs-2"
import {
	getDocumentariesMonthConfig,
	getSpecialsMonthConfig,
	getFeatureFilmsMonthConfig,
} from "../data/getAllMonth"
import documentariesData from "../data/documentaries.json"
import specialsData from "../data/specials.json"
import featureData from "../data/feature-films.json"

ChartJS.register(BarElement, LinearScale, CategoryScale, Tooltip, Legend)

const BardiagramMonth = () => {
	const documentariesMonthConfig =
		getDocumentariesMonthConfig(documentariesData)
	const specialsMonthConfig = getSpecialsMonthConfig(specialsData)
	const featureFilmsMonthConfig = getFeatureFilmsMonthConfig(featureData)

	const data = {
		labels: documentariesMonthConfig.labels,
		datasets: [
			{
				label: "Documentaries",
				data: documentariesMonthConfig.datasets[0].data,
				backgroundColor: "#ff638499",
			},
			{
				label: "Specials",
				data: specialsMonthConfig.datasets[0].data,
				backgroundColor: "#36a2eb99",
			},
			{
				label: "Feature Films",
				data: featureFilmsMonthConfig.datasets[0].data,
				backgroundColor: "#4bc0c099",
			},
		],
	}

	return (
		<section>
			<div className="card">
				<h2>Premiärmånad</h2>
				<Bar data={data} />
			</div>
		</section>
	)
}

export default BardiagramMonth
