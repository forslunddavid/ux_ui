import {
	Chart as ChartJS,
	Tooltip,
	Legend,
	PointElement,
	LineElement,
} from "chart.js"
import { Line } from "react-chartjs-2"
ChartJS.register(Tooltip, Legend, PointElement, LineElement)

import documentariesDb from "../data/documentaries.json"
import specialsDb from "../data/specials.json"
import featureDb from "../data/feature-films.json"

import { getLengthConfig } from "../data/getLength"

const LineDiagramLength = () => {
	const allLengthConfig = getLengthConfig(
		documentariesDb,
		specialsDb,
		featureDb
	)
	return (
		<section>
			<h2>Speltid Filmer</h2>
			<Line data={allLengthConfig} />
		</section>
	)
}

export default LineDiagramLength
