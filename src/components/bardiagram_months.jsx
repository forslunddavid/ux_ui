import {
	Chart as ChartJS,
	ArcElement,
	Tooltip,
	Legend,
	BarElement,
	LinearScale,
	CategoryScale,
} from "chart.js"
import { Bar } from "react-chartjs-2"
ChartJS.register(
	ArcElement,
	BarElement,
	LinearScale,
	CategoryScale,
	Tooltip,
	Legend
)

import documentariesData from "../data/documentaries.json"
import specialsData from "../data/specials.json"
import featureData from "../data/feature-films.json"

import { getMonthConfig } from "../data/getAllMonth"

const BardiagramMonth = () => {
	const allMonthsConfig = getMonthConfig(
		documentariesData,
		specialsData,
		featureData
	)
	return (
		<section>
			<div className="card">
				<h2>Premiärmånad</h2>
				<Bar data={allMonthsConfig} />
			</div>
		</section>
	)
}

export default BardiagramMonth
