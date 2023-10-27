import { useState } from "react"
import {
	Chart as ChartJS,
	ArcElement,
	Tooltip,
	Legend,
	BarElement,
	LinearScale,
	CategoryScale,
} from "chart.js"
import { Pie } from "react-chartjs-2"
import { getAllLanguagesConfig } from "../data/getAllLanguage"
import documentariesData from "../data/documentaries.json"
import specialsData from "../data/specials.json"
import featureData from "../data/feature-films.json"
import { motion } from "framer-motion"

ChartJS.register(
	ArcElement,
	BarElement,
	LinearScale,
	CategoryScale,
	Tooltip,
	Legend
)

const CircleDiagramLanguage = () => {
	const [sortByCount, setSortByCount] = useState(true)

	const toggleSorting = () => {
		setSortByCount(!sortByCount)
	}

	const allLanguagesConfig = getAllLanguagesConfig(
		documentariesData,
		specialsData,
		featureData,
		sortByCount
	)

	return (
		<section>
			<div className="card">
				<h2>Språk alla Filmer</h2>
				<Pie data={allLanguagesConfig}></Pie>
				<motion.button
					className="sortingbutton"
					onClick={toggleSorting}
					whileTap={{ scale: 0.9 }}
					whileHover={{
						scale: 1.1,
						transition: { duration: 0.2 },
					}}
				>
					{sortByCount ? "Sortera på flest" : "Sortera på färst"}
				</motion.button>
			</div>
		</section>
	)
}

export default CircleDiagramLanguage
